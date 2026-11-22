import React, { useState } from 'react'
import { ArrowLeft, BookOpen, ChevronDown, ChevronUp } from 'lucide-react'
import type { AppPage } from '../types'
import { educationTopics } from '../data/education'

interface Props {
  onNavigate: (page: AppPage) => void
}

export default function EducationPanel({ onNavigate }: Props) {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(educationTopics[0].id)

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
        <BookOpen size={14} className="text-gold-300" />
        <span className="text-sm font-serif text-cream">Eğitim Paneli</span>
      </div>

      {/* İçerik */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-6 py-10">

          {/* Başlık */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold-300/40" />
              <span className="text-gold-300/50 font-serif text-xs tracking-widest uppercase">Eğitim Materyali</span>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold-300/40" />
            </div>
            <h2 className="font-serif text-4xl text-cream mb-3" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
              Şehir Planlamasında Deprem Güvenliği
            </h2>
            <p className="text-parchment/60 font-sans text-sm max-w-2xl mx-auto leading-relaxed">
              18. yüzyılda İstanbul ve Lizbon örnekleri üzerinden şehir planlama ilkelerini,
              deprem dayanıklılığını ve tarihsel yeniden yapılanma süreçlerini keşfedin.
            </p>
          </div>

          {/* Konular */}
          <div className="space-y-3">
            {educationTopics.map((topic, i) => {
              const isExpanded = expandedTopic === topic.id
              return (
                <div
                  key={topic.id}
                  className="panel-glass overflow-hidden transition-all duration-200"
                  style={{
                    borderColor: isExpanded ? 'rgba(212,168,67,0.4)' : 'rgba(212,168,67,0.15)',
                  }}
                >
                  {/* Başlık — tıklanabilir */}
                  <button
                    onClick={() => setExpandedTopic(isExpanded ? null : topic.id)}
                    className="w-full flex items-center gap-3 px-5 py-4 text-left transition-colors duration-150"
                    style={{
                      background: isExpanded ? 'rgba(212,168,67,0.08)' : 'transparent',
                    }}
                  >
                    <span className="text-2xl flex-shrink-0">{topic.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-base text-cream mb-0.5">{topic.title}</h3>
                      <span className="text-xs text-gold-200/40 font-sans">
                        Konu {i + 1} / {educationTopics.length}
                      </span>
                    </div>
                    <div className="flex-shrink-0 text-gold-300/60">
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </button>

                  {/* İçerik */}
                  {isExpanded && (
                    <div className="px-5 pb-5 space-y-3 fade-in">
                      <hr className="section-divider" />
                      {topic.content.map((paragraph, j) => (
                        <p key={j} className="text-sm text-parchment/75 font-sans leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Alt navigasyon */}
          <div className="mt-10 pt-6 border-t border-gold-300/10 text-center">
            <p className="text-xs text-gold-200/40 font-sans mb-4">
              Bu bilgiler tarihsel kaynaklardan derlenmiştir ve eğitim amaçlıdır.
            </p>
            <div className="flex justify-center gap-3">
              <button onClick={() => onNavigate('timeline')} className="btn-outline text-xs">
                📅 Tarihsel Zaman Çizelgesi
              </button>
              <button onClick={() => onNavigate('city', 'istanbul')} className="btn-outline text-xs">
                🕌 İstanbul 3D
              </button>
              <button onClick={() => onNavigate('city', 'lisbon')} className="btn-outline text-xs">
                ⛪ Lizbon 3D
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
