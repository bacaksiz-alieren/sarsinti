import React, { useRef, useEffect, useCallback } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { OrbitControls, Sky, Grid, Environment } from '@react-three/drei'
import * as THREE from 'three'
import type { BuildingData, LayerType, CameraPreset } from '../../types'

// ─── Ground Plane ────────────────────────────────────────────────────────────
function GroundPlane({ color = '#1a2a1a' }: { color?: string }) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, 0]} receiveShadow>
      <planeGeometry args={[120, 120]} />
      <meshLambertMaterial color={color} />
    </mesh>
  )
}

// ─── Water Body ──────────────────────────────────────────────────────────────
function WaterBody({ position, size, label }: {
  position: [number, number, number]
  size: [number, number]
  label?: string
}) {
  const meshRef = useRef<THREE.Mesh>(null!)
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const mat = meshRef.current.material as THREE.MeshPhongMaterial
      const t = clock.getElapsedTime()
      mat.color.setHSL(0.58, 0.6, 0.18 + Math.sin(t * 0.4) * 0.02)
    }
  })
  return (
    <mesh ref={meshRef} position={position} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={size} />
      <meshPhongMaterial color="#1a3a5a" shininess={80} specular="#4488aa" />
    </mesh>
  )
}

// ─── Road Segment ─────────────────────────────────────────────────────────────
function RoadSegment({ start, end, width, isMain = false }: {
  start: [number, number]
  end: [number, number]
  width: number
  isMain?: boolean
}) {
  const dx = end[0] - start[0]
  const dz = end[1] - start[1]
  const len = Math.sqrt(dx * dx + dz * dz)
  const angle = Math.atan2(dz, dx)
  const cx = (start[0] + end[0]) / 2
  const cz = (start[1] + end[1]) / 2
  return (
    <mesh
      position={[cx, 0.01, cz]}
      rotation={[-Math.PI / 2, 0, -angle]}
      receiveShadow
    >
      <planeGeometry args={[len, width]} />
      <meshLambertMaterial color={isMain ? '#3a3830' : '#2e2c28'} />
    </mesh>
  )
}

// ─── Open Space / Park ───────────────────────────────────────────────────────
function OpenSpacePlane({ position, size, color, visible }: {
  position: [number, number, number]
  size: [number, number]
  color: string
  visible: boolean
}) {
  if (!visible) return null
  return (
    <mesh position={position} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={size} />
      <meshLambertMaterial color={color} transparent opacity={0.7} />
    </mesh>
  )
}

// ─── Building Mesh ───────────────────────────────────────────────────────────
interface BuildingMeshProps {
  data: BuildingData
  visible: boolean
  selected: boolean
  earthquakeActive: boolean
  earthquakeIntensity: number
  onClick: (data: BuildingData) => void
}

function BuildingMesh({
  data, visible, selected, earthquakeActive, earthquakeIntensity, onClick,
}: BuildingMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const roofRef = useRef<THREE.Mesh>(null!)
  const basePos = useRef(new THREE.Vector3(...data.position))

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    if (earthquakeActive && earthquakeIntensity > 0) {
      const t = clock.getElapsedTime()
      const seed = data.position[0] * 0.3 + data.position[2] * 0.17
      const shake =
        Math.sin(t * 18 + seed) * 0.08 * earthquakeIntensity +
        Math.sin(t * 27 + seed * 1.3) * 0.04 * earthquakeIntensity
      meshRef.current.position.set(
        basePos.current.x + shake,
        basePos.current.y + data.size[1] / 2,
        basePos.current.z + shake * 0.6,
      )
      if (roofRef.current) {
        roofRef.current.position.set(
          basePos.current.x + shake,
          basePos.current.y + data.size[1] + (data.type === 'mosque' || data.type === 'church' ? 0.6 : 0.3),
          basePos.current.z + shake * 0.6,
        )
      }
    } else {
      meshRef.current.position.set(
        basePos.current.x,
        basePos.current.y + data.size[1] / 2,
        basePos.current.z,
      )
      if (roofRef.current) {
        roofRef.current.position.set(
          basePos.current.x,
          basePos.current.y + data.size[1] + (data.type === 'mosque' || data.type === 'church' ? 0.6 : 0.3),
          basePos.current.z,
        )
      }
    }
  })

  if (!visible) return null

  const [w, h, d] = data.size
  const isSquare = data.type === 'square'
  if (isSquare) {
    return (
      <mesh
        position={[data.position[0], data.position[1] + 0.05, data.position[2]]}
        rotation={[-Math.PI / 2, 0, 0]}
        onClick={(e) => { e.stopPropagation(); onClick(data) }}
        receiveShadow
      >
        <planeGeometry args={[w, d]} />
        <meshLambertMaterial color={data.color} transparent opacity={0.8} />
      </mesh>
    )
  }

  const isMosque = data.type === 'mosque'
  const isChurch = data.type === 'church'
  const isTower = data.type === 'tower'
  const isHarbor = data.type === 'harbor'

  return (
    <group>
      {/* Ana bina gövdesi */}
      <mesh
        ref={meshRef}
        position={[data.position[0], data.position[1] + h / 2, data.position[2]]}
        onClick={(e) => { e.stopPropagation(); onClick(data) }}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[w, h, d]} />
        <meshLambertMaterial
          color={selected ? '#ffe080' : data.color}
          emissive={selected ? '#443300' : '#000000'}
        />
      </mesh>

      {/* Çatı */}
      {!isHarbor && (
        <mesh
          ref={roofRef}
          position={[
            data.position[0],
            data.position[1] + h + (isMosque || isChurch ? 0.6 : 0.3),
            data.position[2],
          ]}
          castShadow
        >
          {isMosque ? (
            <sphereGeometry args={[Math.min(w, d) * 0.42, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
          ) : isChurch ? (
            <coneGeometry args={[Math.min(w, d) * 0.4, 2.5, 4]} />
          ) : isTower ? (
            <coneGeometry args={[w * 0.55, 2, 4]} />
          ) : (
            <coneGeometry args={[Math.sqrt(w * w + d * d) * 0.52, Math.max(0.6, h * 0.35), 4]} />
          )}
          <meshLambertMaterial color={data.roofColor} />
        </mesh>
      )}

      {/* Minare (Cami için) */}
      {isMosque && (
        <>
          <mesh
            position={[data.position[0] + w * 0.48, data.position[1] + h * 0.7, data.position[2] + d * 0.48]}
            castShadow
          >
            <cylinderGeometry args={[0.18, 0.22, h * 1.2, 8]} />
            <meshLambertMaterial color="#c8b898" />
          </mesh>
          <mesh
            position={[data.position[0] + w * 0.48, data.position[1] + h * 1.3, data.position[2] + d * 0.48]}
            castShadow
          >
            <coneGeometry args={[0.22, 0.6, 8]} />
            <meshLambertMaterial color="#708080" />
          </mesh>
        </>
      )}

      {/* Seçili vurgulama halkası */}
      {selected && (
        <mesh
          position={[data.position[0], 0.02, data.position[2]]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <ringGeometry args={[Math.max(w, d) * 0.7, Math.max(w, d) * 0.85, 32]} />
          <meshBasicMaterial color="#ffe080" transparent opacity={0.6} />
        </mesh>
      )}
    </group>
  )
}

// ─── Camera Controller ───────────────────────────────────────────────────────
function CameraController({ preset }: { preset: CameraPreset }) {
  const { camera } = useThree()

  useEffect(() => {
    const positions: Record<CameraPreset, [number, number, number]> = {
      default: [30, 25, 35],
      top:     [0, 55, 0.1],
      coast:   [0, 15, -40],
      center:  [0, 20, 20],
      north:   [-10, 20, -30],
    }
    const targets: Record<CameraPreset, [number, number, number]> = {
      default: [0, 0, 0],
      top:     [0, 0, 0],
      coast:   [0, 0, -10],
      center:  [0, 0, 0],
      north:   [0, 0, 5],
    }
    const [px, py, pz] = positions[preset]
    const [tx, ty, tz] = targets[preset]
    camera.position.set(px, py, pz)
    camera.lookAt(tx, ty, tz)
  }, [preset, camera])

  return null
}

// ─── Tooltip label in 3D space ─────────────────────────────────────────────
function BuildingLabel({ data }: { data: BuildingData }) {
  return (
    <group position={[data.position[0], data.size[1] + 1.5, data.position[2]]}>
      <mesh>
        <boxGeometry args={[0.15, 0.15, 0.15]} />
        <meshBasicMaterial color="#ffe080" />
      </mesh>
    </group>
  )
}

// ─── Main Scene ───────────────────────────────────────────────────────────────
export interface CitySceneProps {
  buildings: BuildingData[]
  activeLayers: Set<LayerType>
  selectedBuilding: BuildingData | null
  onSelectBuilding: (b: BuildingData | null) => void
  earthquakeActive: boolean
  earthquakeIntensity: number
  cameraPreset: CameraPreset
  cityId: 'istanbul' | 'lisbon'
  showGrid?: boolean
  extraRoads?: Array<{ start: [number, number]; end: [number, number]; width: number; isMain?: boolean }>
  openSpaces?: Array<{ position: [number, number, number]; size: [number, number]; color: string }>
}

function SceneContents({
  buildings,
  activeLayers,
  selectedBuilding,
  onSelectBuilding,
  earthquakeActive,
  earthquakeIntensity,
  cameraPreset,
  cityId,
  showGrid,
  extraRoads = [],
  openSpaces = [],
}: CitySceneProps) {
  const handleBuildingClick = useCallback((b: BuildingData) => {
    onSelectBuilding(selectedBuilding?.id === b.id ? null : b)
  }, [selectedBuilding, onSelectBuilding])

  const handleBackgroundClick = useCallback(() => {
    onSelectBuilding(null)
  }, [onSelectBuilding])

  const isIstanbul = cityId === 'istanbul'

  return (
    <>
      {/* Işıklar */}
      <ambientLight intensity={0.6} color="#c8d8f0" />
      <directionalLight
        position={[40, 60, 30]}
        intensity={1.4}
        color="#fff8e8"
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-far={200}
        shadow-camera-left={-80}
        shadow-camera-right={80}
        shadow-camera-top={80}
        shadow-camera-bottom={-80}
      />
      <directionalLight position={[-20, 30, -20]} intensity={0.4} color="#8899cc" />
      <hemisphereLight args={['#c8d8f8', '#3a4a2a', 0.5]} />

      {/* Gökyüzü */}
      <Sky
        distance={450000}
        sunPosition={[1, 0.4, 0.3]}
        inclination={0.49}
        azimuth={0.25}
        rayleigh={0.8}
        turbidity={6}
        mieCoefficient={0.003}
        mieDirectionalG={0.9}
      />

      {/* Zemin */}
      <GroundPlane color={isIstanbul ? '#1e2a18' : '#1e2416'} />

      {/* Su kütleleri */}
      {activeLayers.has('coastalZones') && (
        <>
          {isIstanbul ? (
            <>
              {/* Boğaz */}
              <WaterBody position={[0, -0.03, -32]} size={[80, 20]} />
              {/* Haliç */}
              <WaterBody position={[-30, -0.03, -15]} size={[20, 40]} />
            </>
          ) : (
            <>
              {/* Tejo Nehri */}
              <WaterBody position={[0, -0.03, -32]} size={[100, 20]} />
            </>
          )}
        </>
      )}

      {/* Yollar */}
      {activeLayers.has('streets') && extraRoads.map((r, i) => (
        <RoadSegment key={i} start={r.start} end={r.end} width={r.width} isMain={r.isMain} />
      ))}

      {/* Açık alanlar */}
      {openSpaces.map((os, i) => (
        <OpenSpacePlane
          key={i}
          position={os.position}
          size={os.size}
          color={os.color}
          visible={activeLayers.has('openSpaces') || activeLayers.has('gatheringPoints')}
        />
      ))}

      {/* Binalar */}
      {buildings.map(b => {
        const layerVisible = activeLayers.has(b.layer)
        return (
          <BuildingMesh
            key={b.id}
            data={b}
            visible={layerVisible}
            selected={selectedBuilding?.id === b.id}
            earthquakeActive={earthquakeActive}
            earthquakeIntensity={earthquakeIntensity}
            onClick={handleBuildingClick}
          />
        )
      })}

      {/* Seçili bina etiketi */}
      {selectedBuilding && activeLayers.has(selectedBuilding.layer) && (
        <BuildingLabel data={selectedBuilding} />
      )}

      {/* Izgara (opsiyonel) */}
      {showGrid && (
        <Grid
          position={[0, 0.02, 0]}
          args={[100, 100]}
          cellSize={5}
          cellThickness={0.3}
          cellColor="#2a3a2a"
          sectionSize={20}
          sectionThickness={0.6}
          sectionColor="#3a5a3a"
          fadeDistance={80}
          fadeStrength={1}
          infiniteGrid
        />
      )}

      {/* Kamera kontrolü */}
      <CameraController preset={cameraPreset} />

      {/* Arka plan tıklaması */}
      <mesh
        position={[0, -0.1, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        onClick={handleBackgroundClick}
      >
        <planeGeometry args={[200, 200]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      <OrbitControls
        enablePan
        enableZoom
        enableRotate
        maxPolarAngle={Math.PI / 2.1}
        minDistance={8}
        maxDistance={90}
        panSpeed={0.8}
        rotateSpeed={0.6}
        zoomSpeed={1.0}
        target={[0, 0, 0]}
      />
    </>
  )
}

export default function CityScene(props: CitySceneProps) {
  return (
    <div className="w-full h-full canvas-container">
      <Canvas
        shadows
        gl={{ antialias: true, alpha: false }}
        camera={{ position: [30, 25, 35], fov: 50, near: 0.1, far: 500 }}
        style={{ background: '#0a1a2e' }}
        dpr={[1, 1.5]}
      >
        <SceneContents {...props} />
      </Canvas>
    </div>
  )
}
