import React, { useState } from 'react'
import { ArrowLeft, Calendar } from 'lucide-react'
import type { AppPage, CityId } from '../types'
import { istanbulTimeline } from '../data/istanbul'
import { lisbonTimeline } from '../data/lisbon'

interface Props {
  initialCity?: CityId
  onNavigate: (page: AppPage, city?: CityId) => void
}

const typeColors: Record<string, string> = {
  earthquake: '#e06030',
  construction: '#c8a040',
  planning: '#6090c0',
  disaster: '#c04040',
  reform: '#50a870',
}
const typeLabels: Record<string, string> = {
  earthquake: 'Deprem',
  construction: 'İnşaat / Gelişim',
  planning: 'Planlama',
  disaster: 'Afet',
  reform: 'Reform',
}
const typeIcons: Record<string, string> = {
  earthquake: '⚡',
  construction: '🏗️',
  planning: '📐',
  disaster: '🔥',
  reform: '📜',
}

export default function HistoricalTimeline({ initialCity = 'istanbul', onNavigate }: Props) {
  const [activeCity, setActiveCity] = useState<CityId>(initialCity)
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null)

  const events = activeCity === 'istanbul' ? istanbulTimeline : lisbonTimeline
  const accentColor = activeCity === 'istanbul' ? '#d4a843' : '#c06030'
  const cityName = activeCity === 'istanbul' ? 'İstanbul' : 'Lizbon'

  return (
    <div className="w-full h-full flex flex-col bg-navy-950 overflow-hidden">

      {/* Üst bar */}
      <div className="flex items-center gap-3 px-6 py-3 border-b border-gold-300/15 panel-glass-dark flex-shrink-0">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-1.5 text-gold-200/50 hover:text-gold-200 transition-colors"
        >
          <ArrowLeft size={15} />
          <span className="text-xs font-sans">Ana Sayfa</span>
        </button>
        <div className="h-4 w-px bg-gold-300/20" />
        <Calendar size={14} style={{ color: accentColor }} />
        <span className="text-sm font-serif text-cream">Tarihsel Zaman Çizelgesi</span>
        <div className="flex-1" />
        <div className="flex gap-1">
          {(['istanbul', 'lisbon'] as CityId[]).map(c => (
            <button
              key={c}
              onClick={() => setActiveCity(c)}
              className="px-3 py-1 text-xs font-sans tracking-wider transition-all duration-150"
              style={{
                background: activeCity === c ? 'rgba(212,168,67,0.1)' : 'transparent',
                border: `1px solid ${activeCity === c ? accentColor : 'rgba(212,168,67,0.1)'}`,
                color: activeCity === c ? accentColor : 'rgba(212,168,67,0.4)',
              }}
            >
              {c === 'istanbul' ? '🕌 İstanbul' : '⛪ Lizbon'}
            </button>
          ))}
        </div>
      </div>

      {/* İçerik */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-6 py-10">

          {/* Başlık */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-300/40" />
              <span className="text-gold-300/50 font-serif text-xs tracking-widest uppercase">Tarihsel Zaman Çizelgesi</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-300/40" />
            </div>
            <h2 className="font-serif text-3xl text-cream mb-2" style={{ textShadow: `0 0 30px ${accentColor}30` }}>
              {cityName}
            </h2>
            <p className="text-parchment/50 font-sans text-sm">
              Şehrin tarihi ve depremle ilişkisi
            </p>
          </div>

          {/* Feragatname */}
          <div className="mb-8 p-3" style={{
            background: 'rgba(212,168,67,0.05)',
            border: '1px solid rgba(212,168,67,0.15)',
          }}>
            <p className="text-xs font-sans text-gold-200/40 leading-relaxed italic">
              Tarihsel veriler genel kaynaklardan derlenerek özetlenmiştir. Tarihlerde ve detaylarda
              yorum payı bulunabilir. Kesin tarihi kayıtlar için birincil akademik kaynakların incelenmesi önerilir.
            </p>
          </div>

          {/* Zaman çizelgesi */}
          <div className="relative">
            {/* Dikey çizgi */}
            <div
              className="absolute left-16 top-0 bottom-0 w-px"
              style={{ background: `linear-gradient(to bottom, transparent, ${accentColor}40, ${accentColor}40, transparent)` }}
            />

            <div className="space-y-6">
              {events.map((event, i) => {
                const color = typeColors[event.type] ?? '#888'
                const isExpanded = expandedEvent === `${activeCity}-${i}`
                return (
                  <div
                    key={i}
                    className="relative flex gap-6 cursor-pointer group"
                    onClick={() => setExpandedEvent(isExpanded ? null : `${activeCity}-${i}`)}
                  >
                    {/* Yıl */}
                    <div className="w-14 flex-shrink-0 text-right">
                      <span className="font-serif text-sm" style={{ color }}>
                        {event.year}
                      </span>
                    </div>

                    {/* Nokta */}
                    <div className="relative flex-shrink-0 flex items-start pt-1">
                      <div
                        className="w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-200 group-hover:scale-125"
                        style={{
                          borderColor: color,
                          background: isExpanded ? color : `${color}22`,
                        }}
                      >
                        <span className="text-xs">{typeIcons[event.type]}</span>
                      </div>
                    </div>

                    {/* İçerik */}
                    <div className="flex-1 pb-2">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-xs font-sans px-2 py-0.5"
                          style={{
                            background: `${color}18`,
                            border: `1px solid ${color}40`,
                            color,
                          }}
                        >
                          {typeLabels[event.type]}
                        </span>
                      </div>
                      <h3 className="font-serif text-base text-cream mb-1 group-hover:text-gold-200 transition-colors">
                        {event.title}
                      </h3>
                      {isExpanded && (
                        <p className="text-sm text-parchment/70 font-sans leading-relaxed fade-in">
                          {event.description}
                        </p>
                      )}
                      {!isExpanded && (
                        <p className="text-xs text-parchment/40 font-sans line-clamp-1">
                          {event.description}
                        </p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Alt not */}
          <div className="mt-10 pt-6 border-t border-gold-300/10 text-center">
            <p className="text-xs text-gold-200/30 font-sans">
              Daha fazla bilgi için eğitim panelini inceleyin.
            </p>
            <div className="flex justify-center gap-3 mt-3">
              <button
                onClick={() => onNavigate('education')}
                className="btn-outline text-xs"
              >
                Eğitim Paneli
              </button>
              <button
                onClick={() => onNavigate('city', activeCity)}
                className="btn-outline text-xs"
              >
                3D Şehri İncele
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
