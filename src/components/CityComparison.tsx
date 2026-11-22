import React, { useState, useCallback } from 'react'
import { ArrowLeft, LayoutGrid } from 'lucide-react'
import type { CityId, BuildingData, LayerType, AppPage } from '../types'
import { istanbulConfig, istanbulHistoricalBuildings, istanbulResilientBuildings, istanbulComparison } from '../data/istanbul'
import { lisbonConfig, lisbonHistoricalBuildings, lisbonResilientBuildings, lisbonComparison } from '../data/lisbon'
import CityScene from './city/CityScene'

const historicalIstanbulRoads = [
  { start: [-22, -18] as [number,number], end: [22, -18] as [number,number], width: 2.5, isMain: true },
  { start: [-22, 0] as [number,number], end: [22, 0] as [number,number], width: 2 },
  { start: [-8, -22] as [number,number], end: [-8, 22] as [number,number], width: 2, isMain: true },
  { start: [8, -22] as [number,number], end: [8, 22] as [number,number], width: 1.8 },
  { start: [-5, -5] as [number,number], end: [5, 5] as [number,number], width: 1.4 },
]
const resilientIstanbulRoads = [
  { start: [-22, -15] as [number,number], end: [22, -15] as [number,number], width: 4.5, isMain: true },
  { start: [-22, 0] as [number,number], end: [22, 0] as [number,number], width: 4.5, isMain: true },
  { start: [-22, 15] as [number,number], end: [22, 15] as [number,number], width: 4.5, isMain: true },
  { start: [-15, -22] as [number,number], end: [-15, 22] as [number,number], width: 4.5, isMain: true },
  { start: [0, -22] as [number,number], end: [0, 22] as [number,number], width: 4.5, isMain: true },
  { start: [15, -22] as [number,number], end: [15, 22] as [number,number], width: 4.5, isMain: true },
]
const historicalLisbonRoads = [
  { start: [-20, -10] as [number,number], end: [20, -10] as [number,number], width: 1.8, isMain: true },
  { start: [-20, 5] as [number,number], end: [20, 5] as [number,number], width: 1.6 },
  { start: [-8, -20] as [number,number], end: [-8, 22] as [number,number], width: 1.8, isMain: true },
  { start: [-15, -15] as [number,number], end: [0, 0] as [number,number], width: 1.3 },
  { start: [0, 0] as [number,number], end: [15, 10] as [number,number], width: 1.3 },
]
const resilientLisbonRoads = [
  { start: [-22, -14] as [number,number], end: [22, -14] as [number,number], width: 5, isMain: true },
  { start: [-22, -4] as [number,number], end: [22, -4] as [number,number], width: 5, isMain: true },
  { start: [-22, 6] as [number,number], end: [22, 6] as [number,number], width: 5, isMain: true },
  { start: [-16, -22] as [number,number], end: [-16, 22] as [number,number], width: 5, isMain: true },
  { start: [-6, -22] as [number,number], end: [-6, 22] as [number,number], width: 5, isMain: true },
  { start: [4, -22] as [number,number], end: [4, 22] as [number,number], width: 5, isMain: true },
  { start: [14, -22] as [number,number], end: [14, 22] as [number,number], width: 5, isMain: true },
]

const ALL_LAYERS: Set<LayerType> = new Set([
  'buildings','streets','openSpaces','gatheringPoints','commercialZones','coastalZones','mainRoads'
])

interface Props {
  initialCity?: CityId
  onNavigate: (page: AppPage, city?: CityId) => void
}

export default function CityComparison({ initialCity = 'istanbul', onNavigate }: Props) {
  const [activeCity, setActiveCity] = useState<CityId>(initialCity)
  const [leftSelected, setLeftSelected] = useState<BuildingData | null>(null)
  const [rightSelected, setRightSelected] = useState<BuildingData | null>(null)

  const config = activeCity === 'istanbul' ? istanbulConfig : lisbonConfig
  const histBuildings = activeCity === 'istanbul' ? istanbulHistoricalBuildings : lisbonHistoricalBuildings
  const resBuildings = activeCity === 'istanbul' ? istanbulResilientBuildings : lisbonResilientBuildings
  const metrics = activeCity === 'istanbul' ? istanbulComparison : lisbonComparison
  const histRoads = activeCity === 'istanbul' ? historicalIstanbulRoads : historicalLisbonRoads
  const resRoads = activeCity === 'istanbul' ? resilientIstanbulRoads : resilientLisbonRoads
  const accentColor = activeCity === 'istanbul' ? '#d4a843' : '#c06030'

  const histSpaces = activeCity === 'istanbul'
    ? [{ position: [0, 0.02, 5] as [number,number,number], size: [5,5] as [number,number], color: '#3a5a3a' }]
    : [{ position: [0, 0.02, -3] as [number,number,number], size: [3,3] as [number,number], color: '#3a4a3a' }]

  const resSpaces = activeCity === 'istanbul'
    ? [
        { position: [0, 0.02, 8] as [number,number,number], size: [6,6] as [number,number], color: '#4a7a4a' },
        { position: [-12, 0.02, 0] as [number,number,number], size: [5,5] as [number,number], color: '#4a7050' },
      ]
    : [
        { position: [-2, 0.02, -2] as [number,number,number], size: [8,8] as [number,number], color: '#5a8a5a' },
        { position: [-12, 0.02, -2] as [number,number,number], size: [4,4] as [number,number], color: '#4a7a4a' },
        { position: [12, 0.02, -2] as [number,number,number], size: [4,4] as [number,number], color: '#4a7a4a' },
      ]

  return (
    <div className="w-full h-full flex flex-col bg-navy-950 overflow-hidden">

      {/* Üst bar */}
      <div className="flex items-center gap-3 px-4 py-2.5 border-b border-gold-300/15 panel-glass-dark flex-shrink-0">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-1.5 text-gold-200/50 hover:text-gold-200 transition-colors"
        >
          <ArrowLeft size={15} />
          <span className="text-xs font-sans">Ana Sayfa</span>
        </button>
        <div className="h-4 w-px bg-gold-300/20" />
        <LayoutGrid size={14} style={{ color: accentColor }} />
        <span className="text-sm font-serif text-cream">Şehir Planı Karşılaştırması</span>

        <div className="flex-1" />

        {/* Şehir seçimi */}
        <div className="flex gap-1">
          {(['istanbul', 'lisbon'] as CityId[]).map(c => (
            <button
              key={c}
              onClick={() => setActiveCity(c)}
              className="px-3 py-1 text-xs font-sans tracking-wider uppercase transition-all duration-150"
              style={{
                background: activeCity === c ? (c === 'istanbul' ? 'rgba(212,168,67,0.15)' : 'rgba(192,96,48,0.15)') : 'transparent',
                border: `1px solid ${activeCity === c ? accentColor : 'rgba(212,168,67,0.1)'}`,
                color: activeCity === c ? accentColor : 'rgba(212,168,67,0.4)',
              }}
            >
              {c === 'istanbul' ? '🕌 İstanbul' : '⛪ Lizbon'}
            </button>
          ))}
        </div>

        <button
          onClick={() => onNavigate('city', activeCity)}
          className="text-xs font-sans text-gold-200/50 hover:text-gold-200 transition-colors px-2"
        >
          3D İncele →
        </button>
      </div>

      {/* Karşılaştırma başlıkları */}
      <div className="flex flex-shrink-0 border-b border-gold-300/10">
        <div className="flex-1 px-4 py-2 flex items-center gap-2 border-r border-gold-300/10">
          <div className="w-2 h-2 rounded-full" style={{ background: accentColor }} />
          <span className="text-sm font-serif" style={{ color: accentColor }}>Tarihsel Şehir</span>
          <span className="text-xs text-gold-200/30 font-sans ml-1">{config.period} · Orijinal Doku</span>
        </div>
        <div className="flex-1 px-4 py-2 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-sm font-serif text-green-300">Alternatif / Dayanıklı Plan</span>
          <span className="text-xs text-gold-200/30 font-sans ml-1">18. yy. teknolojisiyle uyumlu öneri</span>
        </div>
      </div>

      {/* İki sahne yan yana */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sol — Tarihsel */}
        <div className="flex-1 relative border-r border-gold-300/10">
          <CityScene
            buildings={histBuildings}
            activeLayers={ALL_LAYERS}
            selectedBuilding={leftSelected}
            onSelectBuilding={setLeftSelected}
            earthquakeActive={false}
            earthquakeIntensity={0}
            cameraPreset="default"
            cityId={activeCity}
            extraRoads={histRoads}
            openSpaces={histSpaces}
          />
          {leftSelected && (
            <div
              className="absolute bottom-3 left-3 right-3 p-3 pointer-events-none"
              style={{ background: 'rgba(9,20,40,0.9)', border: `1px solid ${accentColor}50` }}
            >
              <p className="text-xs font-serif" style={{ color: accentColor }}>{leftSelected.label}</p>
              <p className="text-xs text-parchment/60 font-sans mt-1">{leftSelected.planningNote}</p>
            </div>
          )}
        </div>

        {/* Sağ — Dayanıklı */}
        <div className="flex-1 relative">
          <CityScene
            buildings={resBuildings}
            activeLayers={ALL_LAYERS}
            selectedBuilding={rightSelected}
            onSelectBuilding={setRightSelected}
            earthquakeActive={false}
            earthquakeIntensity={0}
            cameraPreset="default"
            cityId={activeCity}
            extraRoads={resRoads}
            openSpaces={resSpaces}
            showGrid
          />
          {rightSelected && (
            <div
              className="absolute bottom-3 left-3 right-3 p-3 pointer-events-none"
              style={{ background: 'rgba(9,20,40,0.9)', border: '1px solid rgba(74,160,74,0.5)' }}
            >
              <p className="text-xs font-serif text-green-300">{rightSelected.label}</p>
              <p className="text-xs text-parchment/60 font-sans mt-1">{rightSelected.planningNote}</p>
            </div>
          )}
        </div>
      </div>

      {/* Alt — karşılaştırma metrikleri */}
      <div className="flex-shrink-0 panel-glass-dark border-t border-gold-300/10 p-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-sans tracking-widest uppercase text-gold-200/50">Karşılaştırma Metrikleri</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs font-sans">
            <thead>
              <tr>
                <th className="text-left text-gold-200/40 font-normal pb-2 pr-4">Özellik</th>
                <th className="text-left pb-2 pr-4 font-normal" style={{ color: `${accentColor}99` }}>Tarihsel</th>
                <th className="text-left pb-2 font-normal text-green-400/70">Alternatif Plan</th>
              </tr>
            </thead>
            <tbody>
              {metrics.map((m, i) => (
                <tr key={i} style={{ borderTop: '1px solid rgba(212,168,67,0.08)' }}>
                  <td className="py-1.5 pr-4 text-gold-200/50">{m.label}</td>
                  <td className="py-1.5 pr-4 text-parchment/70">{m.historical}</td>
                  <td className="py-1.5 text-green-300/80">{m.resilient}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
