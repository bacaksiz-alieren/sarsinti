import React from 'react'
import CityScene, { type CitySceneProps } from './CityScene'
import {
  istanbulHistoricalBuildings,
  istanbulResilientBuildings,
} from '../../data/istanbul'
import type { BuildingData, LayerType, PlanMode, CameraPreset } from '../../types'

// İstanbul'a özgü yollar
const historicalRoads = [
  // Ana akslar
  { start: [-22, -18] as [number, number], end: [22, -18] as [number, number], width: 2.5, isMain: true },
  { start: [-22, 0] as [number, number], end: [22, 0] as [number, number], width: 2, isMain: false },
  { start: [-22, 15] as [number, number], end: [22, 15] as [number, number], width: 1.8, isMain: false },
  { start: [-8, -22] as [number, number], end: [-8, 22] as [number, number], width: 2, isMain: true },
  { start: [8, -22] as [number, number], end: [8, 22] as [number, number], width: 1.8, isMain: false },
  // Çapraz / kıvrımlı sokaklar
  { start: [-5, -5] as [number, number], end: [5, 5] as [number, number], width: 1.4, isMain: false },
  { start: [-12, 5] as [number, number], end: [-3, -3] as [number, number], width: 1.3, isMain: false },
  { start: [3, 8] as [number, number], end: [15, 3] as [number, number], width: 1.4, isMain: false },
  { start: [-18, -8] as [number, number], end: [-10, 10] as [number, number], width: 1.3, isMain: false },
  { start: [10, -10] as [number, number], end: [20, 5] as [number, number], width: 1.4, isMain: false },
  { start: [-5, 12] as [number, number], end: [8, 18] as [number, number], width: 1.3, isMain: false },
  { start: [0, -20] as [number, number], end: [0, -12] as [number, number], width: 2, isMain: true },
]

const resilientRoads = [
  // Geniş ana yollar - ızgara sistemi
  { start: [-22, -15] as [number, number], end: [22, -15] as [number, number], width: 4.5, isMain: true },
  { start: [-22, 0] as [number, number], end: [22, 0] as [number, number], width: 4.5, isMain: true },
  { start: [-22, 15] as [number, number], end: [22, 15] as [number, number], width: 4.5, isMain: true },
  { start: [-15, -22] as [number, number], end: [-15, 22] as [number, number], width: 4.5, isMain: true },
  { start: [0, -22] as [number, number], end: [0, 22] as [number, number], width: 4.5, isMain: true },
  { start: [15, -22] as [number, number], end: [15, 22] as [number, number], width: 4.5, isMain: true },
  // Mahalle ara yolları
  { start: [-22, -7.5] as [number, number], end: [22, -7.5] as [number, number], width: 2.5, isMain: false },
  { start: [-22, 7.5] as [number, number], end: [22, 7.5] as [number, number], width: 2.5, isMain: false },
  { start: [-7.5, -22] as [number, number], end: [-7.5, 22] as [number, number], width: 2.5, isMain: false },
  { start: [7.5, -22] as [number, number], end: [7.5, 22] as [number, number], width: 2.5, isMain: false },
]

// Açık alanlar
const historicalOpenSpaces = [
  { position: [0, 0.02, 5] as [number, number, number], size: [5, 5] as [number, number], color: '#3a5a3a' },
]

const resilientOpenSpaces = [
  { position: [0, 0.02, 8] as [number, number, number], size: [6, 6] as [number, number], color: '#4a7a4a' },
  { position: [-12, 0.02, 0] as [number, number, number], size: [5, 5] as [number, number], color: '#4a7050' },
  { position: [12, 0.02, -8] as [number, number, number], size: [4, 4] as [number, number], color: '#507850' },
  { position: [0, 0.02, -8] as [number, number, number], size: [3, 3] as [number, number], color: '#4a7a4a' },
]

interface Props {
  planMode: PlanMode
  activeLayers: Set<LayerType>
  selectedBuilding: BuildingData | null
  onSelectBuilding: (b: BuildingData | null) => void
  earthquakeActive: boolean
  earthquakeIntensity: number
  cameraPreset: CameraPreset
}

export default function IstanbulScene(props: Props) {
  const { planMode, ...rest } = props
  const buildings = planMode === 'historical' ? istanbulHistoricalBuildings : istanbulResilientBuildings
  const roads = planMode === 'historical' ? historicalRoads : resilientRoads
  const spaces = planMode === 'historical' ? historicalOpenSpaces : resilientOpenSpaces

  return (
    <CityScene
      {...rest}
      buildings={buildings}
      cityId="istanbul"
      extraRoads={roads}
      openSpaces={spaces}
      showGrid={planMode === 'resilient'}
    />
  )
}
