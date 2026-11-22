import React from 'react'
import { X, Building2, Layers, Hammer, BookOpen, MapPin, ShieldAlert } from 'lucide-react'
import type { BuildingData, PlanMode } from '../../types'

const typeLabels: Record<string, string> = {
  mosque: 'Cami / Mescit',
  church: 'Kilise',
  residence: 'Konut',
  market: 'Çarşı / Pazar',
  inn: 'Han',
  palace: 'Saray / Köşk',
  harbor: 'Liman / İskele',
  tower: 'Kule',
  square: 'Meydan / Açık Alan',
  warehouse: 'Depo',
  government: 'Hükümet Binası',
  resilient_residence: 'Planlı Konut Birimi',
  resilient_public: 'Planlı Kamusal Yapı',
}

const layerLabels: Record<string, string> = {
  buildings: 'Yapılar',
  streets: 'Sokaklar',
  openSpaces: 'Açık Alanlar',
  gatheringPoints: 'Toplanma Alanları',
  commercialZones: 'Ticaret Bölgesi',
  coastalZones: 'Kıyı Bölgesi',
  mainRoads: 'Ana Yollar',
}

interface Props {
  building: BuildingData
  planMode: PlanMode
  onClose: () => void
}

export default function BuildingInfoPanel({ building, planMode, onClose }: Props) {
  const isResilient = planMode === 'resilient'

  return (
    <div className="panel-glass-dark h-full flex flex-col slide-in-right">
      {/* Başlık */}
      <div className="flex items-start justify-between p-4 border-b border-gold-300/15">
        <div className="flex-1 min-w-0 mr-2">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-sans tracking-wider uppercase text-gold-300/60">
              {typeLabels[building.type] ?? building.type}
            </span>
            {isResilient && (
              <span className="text-xs px-1.5 py-0.5 font-sans"
                style={{ background: 'rgba(74,160,74,0.2)', color: '#7ada7a', border: '1px solid rgba(74,160,74,0.3)' }}>
                Alternatif Plan
              </span>
            )}
          </div>
          <h3 className="font-serif text-lg text-cream font-bold leading-tight">{building.label}</h3>
        </div>
        <button
          onClick={onClose}
          className="text-gold-200/40 hover:text-gold-200 transition-colors p-1 flex-shrink-0"
        >
          <X size={16} />
        </button>
      </div>

      {/* İçerik */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Renk göstergesi */}
        <div className="flex items-center gap-2">
          <div
            className="w-5 h-5 rounded-sm border border-gold-300/20 flex-shrink-0"
            style={{ background: building.color }}
          />
          <span className="text-xs text-gold-200/50 font-sans">{building.material}</span>
        </div>

        {/* Temel bilgiler */}
        <div className="grid grid-cols-2 gap-2">
          <InfoChip icon={<Layers size={11} />} label="Kat Sayısı" value={
            building.floors === 0 ? 'Açık alan' : `${building.floors} kat`
          } />
          <InfoChip icon={<MapPin size={11} />} label="Katman" value={layerLabels[building.layer] ?? building.layer} />
        </div>

        <hr className="section-divider" />

        {/* Açıklama */}
        <InfoSection
          icon={<Building2 size={13} />}
          title="Yapı Hakkında"
          text={building.description}
          color="#d4a843"
        />

        {/* Tarihsel bağlam */}
        <InfoSection
          icon={<BookOpen size={13} />}
          title="Tarihsel Bağlam"
          text={building.historicalContext}
          color="#a0c0d0"
        />

        {/* Planlama notu */}
        <InfoSection
          icon={<MapPin size={13} />}
          title="Planlama Değerlendirmesi"
          text={building.planningNote}
          color={isResilient ? '#7ada7a' : '#c0a860'}
        />

        <hr className="section-divider" />

        {/* Deprem riski notu */}
        <div className="p-3" style={{ background: 'rgba(200,80,40,0.08)', border: '1px solid rgba(200,80,40,0.2)' }}>
          <div className="flex items-center gap-2 mb-2">
            <ShieldAlert size={13} style={{ color: '#e08060' }} />
            <span className="text-xs font-sans tracking-wider uppercase" style={{ color: '#e08060' }}>
              Deprem Dayanıklılığı (Kavramsal)
            </span>
          </div>
          <p className="text-xs text-parchment/70 font-sans leading-relaxed">
            {building.riskNote}
          </p>
        </div>

        {/* Feragatname */}
        <div className="p-2.5" style={{ background: 'rgba(212,168,67,0.05)', border: '1px solid rgba(212,168,67,0.1)' }}>
          <p className="text-xs text-gold-200/35 font-sans leading-relaxed italic">
            Bu bilgiler modelin eğitim amaçlı varsayımlarıdır.
            Gerçek yapıların mühendislik performansını temsil etmez.
          </p>
        </div>
      </div>
    </div>
  )
}

function InfoChip({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="p-2.5" style={{ background: 'rgba(212,168,67,0.07)', border: '1px solid rgba(212,168,67,0.12)' }}>
      <div className="flex items-center gap-1.5 mb-0.5">
        <span className="text-gold-300/60">{icon}</span>
        <span className="text-xs text-gold-200/50 font-sans">{label}</span>
      </div>
      <span className="text-sm text-cream font-serif">{value}</span>
    </div>
  )
}

function InfoSection({ icon, title, text, color }: {
  icon: React.ReactNode; title: string; text: string; color: string
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-1.5">
        <span style={{ color }}>{icon}</span>
        <span className="text-xs font-sans tracking-wider uppercase" style={{ color: `${color}bb` }}>
          {title}
        </span>
      </div>
      <p className="text-xs text-parchment/75 font-sans leading-relaxed">{text}</p>
    </div>
  )
}
