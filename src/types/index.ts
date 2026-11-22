export type CityId = 'istanbul' | 'lisbon'
export type PlanMode = 'historical' | 'resilient'
export type AppPage = 'home' | 'city' | 'comparison' | 'education' | 'timeline' | 'about'

export interface BuildingData {
  id: string
  type: BuildingType
  position: [number, number, number]
  size: [number, number, number]
  floors: number
  material: string
  color: string
  roofColor: string
  label: string
  description: string
  historicalContext: string
  planningNote: string
  riskNote: string
  layer: LayerType
}

export type BuildingType =
  | 'mosque'
  | 'church'
  | 'residence'
  | 'market'
  | 'inn'
  | 'palace'
  | 'harbor'
  | 'tower'
  | 'square'
  | 'warehouse'
  | 'government'
  | 'resilient_residence'
  | 'resilient_public'

export type LayerType =
  | 'buildings'
  | 'streets'
  | 'openSpaces'
  | 'gatheringPoints'
  | 'commercialZones'
  | 'coastalZones'
  | 'mainRoads'

export interface LayerConfig {
  id: LayerType
  label: string
  color: string
  visible: boolean
}

export interface CityConfig {
  id: CityId
  name: string
  subtitle: string
  period: string
  description: string
  historicalNote: string
  earthquakeInfo: string
  coordinates: { lat: number; lng: number }
  layers: LayerConfig[]
}

export interface TimelineEvent {
  year: string
  title: string
  description: string
  type: 'earthquake' | 'construction' | 'planning' | 'disaster' | 'reform'
}

export interface EducationTopic {
  id: string
  title: string
  icon: string
  content: string[]
}

export interface ComparisonMetric {
  label: string
  historical: string
  resilient: string
}

export interface SceneState {
  selectedBuilding: BuildingData | null
  activeLayers: Set<LayerType>
  planMode: PlanMode
  earthquakeActive: boolean
  cameraPreset: CameraPreset
}

export type CameraPreset = 'default' | 'top' | 'coast' | 'center' | 'north'
