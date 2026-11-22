import React from 'react'
import CityScene from './CityScene'
import {
  lisbonHistoricalBuildings,
  lisbonResilientBuildings,
} from '../../data/lisbon'
import type { BuildingData, LayerType, PlanMode, CameraPreset } from '../../types'

// Lizbon'a özgü yollar
const historicalRoads = [
  // Ortaçağ dokusu — kıvrımlı dar sokaklar
  { start: [-20, -10] as [number, number], end: [20, -10] as [number, number], width: 1.8, isMain: true },
  { start: [-20, 5] as [number, number], end: [20, 5] as [number, number], width: 1.6, isMain: false },
  { start: [-20, 18] as [number, number], end: [20, 18] as [number, number], width: 1.5, isMain: false },
  { start: [-8, -20] as [number, number], end: [-8, 22] as [number, number], width: 1.8, isMain: true },
  { start: [5, -20] as [number, number], end: [5, 22] as [number, number], width: 1.6, isMain: false },
  // Çapraz sokakllar
  { start: [-15, -15] as [number, number], end: [0, 0] as [number, number], width: 1.3, isMain: false },
  { start: [0, 0] as [number, number], end: [15, 10] as [number, number], width: 1.3, isMain: false },
  { start: [-12, 8] as [number, number], end: [5, -5] as [number, number], width: 1.2, isMain: false },
  { start: [8, 12] as [number, number], end: [18, 0] as [number, number], width: 1.3, isMain: false },
  { start: [-5, 15] as [number, number], end: [10, 20] as [number, number], width: 1.2, isMain: false },
  { start: [-18, 2] as [number, number], end: [-5, -8] as [number, number], width: 1.3, isMain: false },
  // Liman yolu
  { start: [-20, -18] as [number, number], end: [20, -18] as [number, number], width: 2.5, isMain: true },
]

const resilientRoads = [
  // Geniş ızgara sistemi — Pombaline esinli ama özgün
  { start: [-22, -14] as [number, number], end: [22, -14] as [number, number], width: 5, isMain: true },
  { start: [-22, -4] as [number, number], end: [22, -4] as [number, number], width: 5, isMain: true },
  { start: [-22, 6] as [number, number], end: [22, 6] as [number, number], width: 5, isMain: true },
  { start: [-22, 16] as [number, number], end: [22, 16] as [number, number], width: 5, isMain: true },
  { start: [-16, -22] as [number, number], end: [-16, 22] as [number, number], width: 5, isMain: true },
  { start: [-6, -22] as [number, number], end: [-6, 22] as [number, number], width: 5, isMain: true },
  { start: [4, -22] as [number, number], end: [4, 22] as [number, number], width: 5, isMain: true },
  { start: [14, -22] as [number, number], end: [14, 22] as [number, number], width: 5, isMain: true },
  // Liman ana yolu
  { start: [-22, -20] as [number, number], end: [22, -20] as [number, number], width: 6, isMain: true },
  // Ara yollar
  { start: [-22, -9] as [number, number], end: [22, -9] as [number, number], width: 2.8, isMain: false },
  { start: [-22, 1] as [number, number], end: [22, 1] as [number, number], width: 2.8, isMain: false },
  { start: [-22, 11] as [number, number], end: [22, 11] as [number, number], width: 2.8, isMain: false },
  { start: [-11, -22] as [number, number], end: [-11, 22] as [number, number], width: 2.8, isMain: false },
  { start: [-1, -22] as [number, number], end: [-1, 22] as [number, number], width: 2.8, isMain: false },
  { start: [9, -22] as [number, number], end: [9, 22] as [number, number], width: 2.8, isMain: false },
  { start: [19, -22] as [number, number], end: [19, 22] as [number, number], width: 2.8, isMain: false },
]

// Açık alanlar
const historicalOpenSpaces = [
  { position: [0, 0.02, -3] as [number, number, number], size: [3, 3] as [number, number], color: '#3a4a3a' },
  { position: [5, 0.02, 0] as [number, number, number], size: [2, 2] as [number, number], color: '#3a4a3a' },
]

const resilientOpenSpaces = [
  // Büyük merkezi meydan
  { position: [-2, 0.02, -2] as [number, number, number], size: [8, 8] as [number, number], color: '#5a8a5a' },
  // Mahalle meydanları
  { position: [-12, 0.02, -2] as [number, number, number], size: [4, 4] as [number, number], color: '#4a7a4a' },
  { position: [12, 0.02, -2] as [number, number, number], size: [4, 4] as [number, number], color: '#4a7a4a' },
  { position: [-12, 0.02, 11] as [number, number, number], size: [3, 3] as [number, number], color: '#4a7050' },
  { position: [12, 0.02, 11] as [number, number, number], size: [3, 3] as [number, number], color: '#4a7050' },
  // Kıyı açık alanı
  { position: [0, 0.02, -17] as [number, number, number], size: [20, 3] as [number, number], color: '#3a6050' },
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

export default function LisbonScene(props: Props) {
  const { planMode, ...rest } = props
  const buildings = planMode === 'historical' ? lisbonHistoricalBuildings : lisbonResilientBuildings
  const roads = planMode === 'historical' ? historicalRoads : resilientRoads
  const spaces = planMode === 'historical' ? historicalOpenSpaces : resilientOpenSpaces

  return (
    <CityScene
      {...rest}
      buildings={buildings}
      cityId="lisbon"
      extraRoads={roads}
      openSpaces={spaces}
      showGrid={planMode === 'resilient'}
    />
  )
}
