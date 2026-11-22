import React, { useState, useCallback, useEffect, useRef } from 'react'
import { ArrowLeft, ChevronLeft, ChevronRight, Camera, Layers, Info, Zap, LayoutGrid } from 'lucide-react'
import type { CityId, BuildingData, LayerType, PlanMode, CameraPreset, AppPage } from '../../types'
import { istanbulConfig } from '../../data/istanbul'
import { lisbonConfig } from '../../data/lisbon'
import IstanbulScene from './IstanbulScene'
import LisbonScene from './LisbonScene'
import CityLayers from './CityLayers'
import BuildingInfoPanel from './BuildingInfoPanel'
import EarthquakeScenario from './EarthquakeScenario'

interface Props {
  cityId: CityId
  onNavigate: (page: AppPage, city?: CityId) => void
}

type LeftPanel = 'layers' | 'earthquake' | null

export default function CityViewer({ cityId, onNavigate }: Props) {
  const config = cityId === 'istanbul' ? istanbulConfig : lisbonConfig

  const [planMode, setPlanMode] = useState<PlanMode>('historical')
  const [activeLayers, setActiveLayers] = useState<Set<LayerType>>(
    new Set(config.layers.map(l => l.id)),
  )
  const [selectedBuilding, setSelectedBuilding] = useState<BuildingData | null>(null)
  const [leftPanel, setLeftPanel] = useState<LeftPanel>('layers')
  const [cameraPreset, setCameraPreset] = useState<CameraPreset>('default')
  const [earthquakeActive, setEarthquakeActive] = useState(false)
  const [earthquakeIntensity, setEarthquakeIntensity] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const [infoExpanded, setInfoExpanded] = useState(true)

  const intensityRef = useRef(0)
  const animRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Deprem yoğunluk animasyonu
  useEffect(() => {
    if (earthquakeActive) {
      let t = 0
      animRef.current = setInterval(() => {
        t += 0.05
        // İlk artış, ortada tepe, yavaş düşüş
        const env = t < 2
          ? t / 2
          : t < 8
            ? 1 - (t - 2) * 0.03
            : Math.max(0, 1 - (t - 2) * 0.08)
        const val = Math.max(0, Math.min(1, env * (0.7 + Math.random() * 0.3)))
        intensityRef.current = val
        setEarthquakeIntensity(val)
        if (val <= 0 && t > 3) {
          if (animRef.current) clearInterval(animRef.current)
        }
      }, 50)
    } else {
      setEarthquakeIntensity(0)
      if (animRef.current) clearInterval(animRef.current)
    }
    return () => { if (animRef.current) clearInterval(animRef.current) }
  }, [earthquakeActive])

  const toggleLayer = useCallback((layer: LayerType) => {
    setActiveLayers(prev => {
      const next = new Set(prev)
      next.has(layer) ? next.delete(layer) : next.add(layer)
      return next
    })
  }, [])

  const toggleAllLayers = useCallback((visible: boolean) => {
    setActiveLayers(visible ? new Set(config.layers.map(l => l.id)) : new Set())
  }, [config.layers])

  const switchPlanMode = useCallback((mode?: PlanMode) => {
    setTransitioning(true)
    setTimeout(() => {
      setPlanMode(mode ?? (prev => prev === 'historical' ? 'resilient' : 'historical'))
      setSelectedBuilding(null)
      setTransitioning(false)
    }, 300)
  }, [])

  const handleEarthquakeStart = useCallback(() => {
    setEarthquakeActive(true)
    setLeftPanel('earthquake')
  }, [])

  const handleEarthquakeStop = useCallback(() => {
    setEarthquakeActive(false)
    setEarthquakeIntensity(0)
  }, [])

  const handleSwitchPlan = useCallback(() => {
    switchPlanMode()
  }, [switchPlanMode])

  const SceneComponent = cityId === 'istanbul' ? IstanbulScene : LisbonScene
  const accentColor = cityId === 'istanbul' ? '#d4a843' : '#c06030'

  return (
    <div className="w-full h-full flex flex-col bg-navy-950 overflow-hidden">

      {/* Üst bar */}
      <div className="flex items-center gap-3 px-4 py-2.5 border-b border-gold-300/15 panel-glass-dark flex-shrink-0 z-10">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-1.5 text-gold-200/50 hover:text-gold-200 transition-colors"
        >
          <ArrowLeft size={15} />
          <span className="text-xs font-sans">Ana Sayfa</span>
        </button>

        <div className="h-4 w-px bg-gold-300/20" />

        <div className="flex items-center gap-2">
          <span className="text-sm font-serif" style={{ color: accentColor }}>{config.name}</span>
          <span className="text-gold-200/30 text-xs font-sans">{config.subtitle}</span>
        </div>

        <div className="flex-1" />

        {/* Şehir geçişi */}
        <div className="flex items-center gap-1 text-xs font-sans">
          <button
            onClick={() => onNavigate('city', 'istanbul')}
            className="px-3 py-1 transition-all duration-150"
            style={{
              background: cityId === 'istanbul' ? 'rgba(212,168,67,0.15)' : 'transparent',
              border: `1px solid ${cityId === 'istanbul' ? 'rgba(212,168,67,0.4)' : 'rgba(212,168,67,0.1)'}`,
              color: cityId === 'istanbul' ? '#d4a843' : '#d4a84350',
            }}
          >🕌 İstanbul</button>
          <button
            onClick={() => onNavigate('city', 'lisbon')}
            className="px-3 py-1 transition-all duration-150"
            style={{
              background: cityId === 'lisbon' ? 'rgba(192,96,48,0.15)' : 'transparent',
              border: `1px solid ${cityId === 'lisbon' ? 'rgba(192,96,48,0.4)' : 'rgba(192,96,48,0.1)'}`,
              color: cityId === 'lisbon' ? '#c06030' : '#c0603050',
            }}
          >⛪ Lizbon</button>
        </div>

        <div className="h-4 w-px bg-gold-300/20" />

        {/* Diğer sayfalar */}
        <button
          onClick={() => onNavigate('comparison', cityId)}
          className="text-xs font-sans text-gold-200/50 hover:text-gold-200 transition-colors px-2"
        >
          <LayoutGrid size={14} className="inline mr-1" />
          Karşılaştır
        </button>
      </div>

      {/* Ana alan */}
      <div className="flex-1 flex overflow-hidden">

        {/* Sol panel */}
        <div
          className="flex-shrink-0 overflow-y-auto panel-glass-dark border-r border-gold-300/10 transition-all duration-300"
          style={{ width: leftPanel ? '220px' : '44px' }}
        >
          {/* Panel toggle butonları */}
          <div className="flex flex-col border-b border-gold-300/10">
            {[
              { id: 'layers' as LeftPanel, icon: <Layers size={15} />, label: 'Katmanlar' },
              { id: 'earthquake' as LeftPanel, icon: <Zap size={15} />, label: 'Deprem' },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setLeftPanel(prev => prev === item.id ? null : item.id)}
                className="flex items-center gap-2 px-3 py-2.5 transition-all duration-150"
                style={{
                  background: leftPanel === item.id ? 'rgba(212,168,67,0.1)' : 'transparent',
                  borderBottom: '1px solid rgba(212,168,67,0.08)',
                  color: leftPanel === item.id ? '#d4a843' : 'rgba(212,168,67,0.4)',
                }}
                title={leftPanel ? '' : item.label}
              >
                {item.icon}
                {leftPanel && (
                  <span className="text-xs font-sans whitespace-nowrap overflow-hidden" style={{ opacity: leftPanel ? 1 : 0 }}>
                    {item.label}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Panel içeriği */}
          {leftPanel === 'layers' && (
            <div className="p-3">
              <CityLayers
                layers={config.layers}
                activeLayers={activeLayers}
                onToggle={toggleLayer}
                onToggleAll={toggleAllLayers}
              />

              <hr className="section-divider my-3" />

              {/* Şehir bilgisi */}
              <div>
                <span className="text-xs font-sans tracking-widest uppercase text-gold-200/50 block mb-2">
                  Bilgi
                </span>
                <p className="text-xs text-parchment/60 font-sans leading-relaxed">
                  {config.historicalNote}
                </p>
              </div>
            </div>
          )}

          {leftPanel === 'earthquake' && (
            <EarthquakeScenario
              active={earthquakeActive}
              intensity={earthquakeIntensity}
              planMode={planMode}
              onStart={handleEarthquakeStart}
              onStop={handleEarthquakeStop}
              onSwitchPlan={handleSwitchPlan}
            />
          )}
        </div>

        {/* 3D Sahne */}
        <div className="relative flex-1 overflow-hidden">
          {/* Geçiş örtüsü */}
          <div
            className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-300"
            style={{
              background: '#050d1a',
              opacity: transitioning ? 1 : 0,
            }}
          />

          <SceneComponent
            planMode={planMode}
            activeLayers={activeLayers}
            selectedBuilding={selectedBuilding}
            onSelectBuilding={setSelectedBuilding}
            earthquakeActive={earthquakeActive}
            earthquakeIntensity={earthquakeIntensity}
            cameraPreset={cameraPreset}
          />

          {/* Kamera kontrolleri */}
          <div className="absolute top-3 right-3 flex flex-col gap-1.5 z-10">
            {([
              { id: 'default' as CameraPreset, label: '↗', title: 'Varsayılan Görünüm' },
              { id: 'top' as CameraPreset, label: '↓', title: 'Kuşbakışı' },
              { id: 'coast' as CameraPreset, label: '⚓', title: 'Kıyı Görünümü' },
              { id: 'center' as CameraPreset, label: '🎯', title: 'Merkez' },
            ] as const).map(cam => (
              <button
                key={cam.id}
                onClick={() => setCameraPreset(cam.id)}
                title={cam.title}
                className="w-8 h-8 flex items-center justify-center text-sm transition-all duration-150"
                style={{
                  background: cameraPreset === cam.id ? 'rgba(212,168,67,0.3)' : 'rgba(9,20,40,0.85)',
                  border: `1px solid ${cameraPreset === cam.id ? 'rgba(212,168,67,0.6)' : 'rgba(212,168,67,0.2)'}`,
                  color: cameraPreset === cam.id ? '#d4a843' : 'rgba(212,168,67,0.5)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {cam.label}
              </button>
            ))}
          </div>

          {/* Fare ipucu */}
          {!selectedBuilding && (
            <div
              className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
              style={{
                background: 'rgba(9,20,40,0.85)',
                border: '1px solid rgba(212,168,67,0.15)',
                backdropFilter: 'blur(8px)',
                padding: '5px 12px',
              }}
            >
              <span className="text-xs text-gold-200/40 font-sans">
                Döndür: Sol tık · Zoom: Scroll · Kaydır: Sağ tık · Bina seç: Tıkla
              </span>
            </div>
          )}

          {/* Deprem aktif göstergesi */}
          {earthquakeActive && (
            <div
              className="absolute top-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 px-3 py-1.5"
              style={{
                background: 'rgba(200,60,20,0.85)',
                border: '1px solid rgba(220,80,40,0.6)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div className="w-2 h-2 rounded-full animate-pulse bg-red-300" />
              <span className="text-xs font-serif text-red-200 tracking-wider">DEPREM SENARYOSU AKTİF</span>
            </div>
          )}
        </div>

        {/* Sağ panel — bina bilgisi */}
        {selectedBuilding && (
          <div
            className="flex-shrink-0 overflow-y-auto"
            style={{ width: '260px', borderLeft: '1px solid rgba(212,168,67,0.1)' }}
          >
            <BuildingInfoPanel
              building={selectedBuilding}
              planMode={planMode}
              onClose={() => setSelectedBuilding(null)}
            />
          </div>
        )}
      </div>

      {/* Alt bar — plan geçiş kontrolleri */}
      <div className="flex-shrink-0 panel-glass-dark border-t border-gold-300/10 px-4 py-3 z-10">
        <div className="flex items-center justify-between">

          {/* Sol: Aktif plan etiketi */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-sans text-gold-200/40 tracking-wider">ŞEHİR PLANI</span>
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: planMode === 'historical' ? accentColor : '#7ada7a' }}
              />
              <span className="text-sm font-serif" style={{ color: planMode === 'historical' ? accentColor : '#7ada7a' }}>
                {planMode === 'historical' ? 'Tarihsel Şehir' : 'Alternatif / Dayanıklı Plan'}
              </span>
            </div>
          </div>

          {/* Orta: Geçiş butonu */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => switchPlanMode('historical')}
              className="px-4 py-1.5 text-xs font-serif tracking-wider transition-all duration-200"
              style={{
                background: planMode === 'historical' ? `${accentColor}22` : 'transparent',
                border: `1px solid ${planMode === 'historical' ? accentColor : 'rgba(212,168,67,0.2)'}`,
                color: planMode === 'historical' ? accentColor : 'rgba(212,168,67,0.4)',
              }}
            >
              <ChevronLeft size={12} className="inline mr-1" />
              Tarihsel Plan
            </button>

            <button
              onClick={() => switchPlanMode()}
              className="px-4 py-1.5 text-xs font-serif tracking-wider transition-all duration-200"
              style={{
                background: 'rgba(212,168,67,0.08)',
                border: '1px solid rgba(212,168,67,0.3)',
                color: '#d4a843',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(212,168,67,0.15)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(212,168,67,0.08)' }}
            >
              ⇄ Geçiş Yap
            </button>

            <button
              onClick={() => switchPlanMode('resilient')}
              className="px-4 py-1.5 text-xs font-serif tracking-wider transition-all duration-200"
              style={{
                background: planMode === 'resilient' ? 'rgba(74,160,74,0.2)' : 'transparent',
                border: `1px solid ${planMode === 'resilient' ? 'rgba(74,160,74,0.5)' : 'rgba(74,160,74,0.15)'}`,
                color: planMode === 'resilient' ? '#7ada7a' : 'rgba(74,160,74,0.4)',
              }}
            >
              Alternatif Plan
              <ChevronRight size={12} className="inline ml-1" />
            </button>
          </div>

          {/* Sağ: Bilgi butonu */}
          <button
            onClick={() => setInfoExpanded(e => !e)}
            className="flex items-center gap-1.5 text-gold-200/40 hover:text-gold-200 transition-colors text-xs font-sans"
          >
            <Info size={13} />
            <span>Şehir Bilgisi</span>
          </button>
        </div>

        {/* Genişletilmiş şehir bilgisi */}
        {infoExpanded && (
          <div className="mt-3 pt-3 border-t border-gold-300/10">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-xs font-sans text-gold-200/40 tracking-wider uppercase block mb-1">
                  Deprem Bilgisi
                </span>
                <p className="text-xs text-parchment/60 font-sans leading-relaxed">
                  {config.earthquakeInfo.substring(0, 160)}…
                </p>
              </div>
              <div>
                <span className="text-xs font-sans text-gold-200/40 tracking-wider uppercase block mb-1">
                  Bu Görünüm Hakkında
                </span>
                <p className="text-xs text-parchment/60 font-sans leading-relaxed">
                  {planMode === 'historical'
                    ? `${config.name}'un 18. yüzyıl tarihsel şehir dokusundan esinlenen temsili model.`
                    : `${config.name} için önerilen depreme dayanıklı alternatif planlama yaklaşımı. 18. yüzyıl teknolojisiyle uyumlu kavramsal tasarım.`
                  }
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
