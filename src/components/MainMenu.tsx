import React, { useState } from 'react'
import type { AppPage, CityId } from '../types'

interface Props {
  onNavigate: (page: AppPage, city?: CityId) => void
}

const cityCards = [
  {
    id: 'istanbul' as CityId,
    name: 'İstanbul',
    subtitle: 'Osmanlı Başkenti · 1750–1800',
    description:
      'Boğaz kıyısına yayılmış yoğun ahşap doku, dar sokaklar ve tarihi yapılar. 18. yüzyılda dünyanın en kalabalık şehirlerinden birinin deprem riskini keşfedin.',
    details: ['Ahşap çatkı yapı dokusu', 'Yoğun ve düzensiz sokak ağı', 'Tarihi yarımada yerleşimi', 'Boğaz kıyısı riskleri'],
    color: 'from-amber-900/40 to-navy-900',
    accent: '#d4a843',
    icon: '🕌',
    period: '1750–1800',
  },
  {
    id: 'lisbon' as CityId,
    name: 'Lizbon',
    subtitle: 'Portekiz Başkenti · 1750–1800',
    description:
      'Tejo Nehri kıyısındaki zengin liman şehri. 1755 depreminin yıktığı ve Pombal Markisi\'nin yeniden tasarladığı kentin hikâyesini inceleyin.',
    details: ['1755 Büyük Depremi', 'Pombaline yeniden yapılanma', 'Ortaçağ dokusu vs. ızgara plan', 'Tejo kıyısı ve tsunami'],
    color: 'from-orange-900/40 to-navy-900',
    accent: '#c06030',
    icon: '⛪',
    period: '1750–1800',
  },
]

export default function MainMenu({ onNavigate }: Props) {
  const [hoveredCity, setHoveredCity] = useState<CityId | null>(null)

  return (
    <div className="relative w-full h-full overflow-auto bg-navy-950 map-texture">

      {/* Dekoratif arka plan çizgileri */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#d4a843" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
        {/* Köşe süslemeleri */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-gold-300/20 m-6"/>
        <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-gold-300/20 m-6"/>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-gold-300/20 m-6"/>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-gold-300/20 m-6"/>
      </div>

      {/* Navigasyon */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-4 border-b border-gold-300/15">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border border-gold-300/60 flex items-center justify-center">
            <span className="text-gold-300 font-serif text-sm font-bold">S</span>
          </div>
          <span className="text-gold-200/70 font-serif text-xs tracking-widest uppercase">Sarsıntı</span>
        </div>
        <div className="flex gap-6">
          {[
            { label: 'Karşılaştırma', page: 'comparison' as AppPage },
            { label: 'Tarihsel Bilgiler', page: 'timeline' as AppPage },
            { label: 'Eğitim', page: 'education' as AppPage },
            { label: 'Hakkında', page: 'about' as AppPage },
          ].map(item => (
            <button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              className="text-gold-200/60 hover:text-gold-200 font-serif text-xs tracking-wider uppercase transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Ana başlık */}
      <div className="relative z-10 text-center pt-16 pb-10 px-8">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-gold-300/50"/>
          <span className="text-gold-300/60 font-serif text-xs tracking-widest uppercase">XVIII. Yüzyıl Şehir Planlaması</span>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-gold-300/50"/>
        </div>

        <h1 className="font-serif text-7xl md:text-8xl font-bold tracking-widest text-cream mb-2"
          style={{ textShadow: '0 0 60px rgba(212,168,67,0.3), 0 2px 4px rgba(0,0,0,0.8)' }}>
          SARSINTI
        </h1>

        <div className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-gold-300/50 to-transparent mb-6"/>

        <p className="text-gold-200/80 font-serif text-xl md:text-2xl italic mb-4 tracking-wide">
          "Bir şehir, felaketten sonra nasıl yeniden inşa edilir?"
        </p>

        <p className="text-parchment/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-sans">
          18. yüzyılda İstanbul ve Lizbon'u yeniden tasarlayın. Şehir planlaması,
          yapılaşma ve kamusal alanların deprem riskine karşı rolünü keşfedin.
        </p>

        <div className="mt-6 flex items-center justify-center gap-6 text-xs text-gold-200/40 font-sans tracking-wider">
          <span>Eğitim Amaçlı Simülasyon</span>
          <span className="text-gold-300/30">◆</span>
          <span>Temsili 3D Modeller</span>
          <span className="text-gold-300/30">◆</span>
          <span>Tarihsel Kaynaklardan Esinlendi</span>
        </div>
      </div>

      {/* Şehir kartları */}
      <div className="relative z-10 max-w-5xl mx-auto px-8 pb-16 grid md:grid-cols-2 gap-8">
        {cityCards.map(city => (
          <div
            key={city.id}
            className={`relative group cursor-pointer transition-all duration-300 ${
              hoveredCity === city.id ? 'scale-[1.02]' : 'scale-100'
            }`}
            onMouseEnter={() => setHoveredCity(city.id)}
            onMouseLeave={() => setHoveredCity(null)}
          >
            {/* Kart arka planı */}
            <div className={`panel-glass rounded-sm overflow-hidden transition-all duration-300 ${
              hoveredCity === city.id ? 'border-gold-300/50' : ''
            }`}>
              {/* Üst renkli şerit */}
              <div className="h-1" style={{ background: `linear-gradient(90deg, transparent, ${city.accent}, transparent)` }}/>

              <div className="p-8">
                {/* Başlık */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-3xl">{city.icon}</span>
                      <h2 className="font-serif text-3xl text-cream font-bold tracking-wider">{city.name}</h2>
                    </div>
                    <p className="text-xs tracking-widest uppercase font-sans" style={{ color: city.accent }}>
                      {city.subtitle}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-gold-200/40 font-serif text-xs">{city.period}</span>
                  </div>
                </div>

                {/* Ayırıcı */}
                <div className="h-px mb-5" style={{ background: `linear-gradient(90deg, ${city.accent}40, transparent)` }}/>

                {/* Açıklama */}
                <p className="text-parchment/70 text-sm leading-relaxed mb-6 font-sans">
                  {city.description}
                </p>

                {/* Özellikler */}
                <ul className="space-y-2 mb-8">
                  {city.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-gold-200/60 font-sans">
                      <span style={{ color: city.accent }} className="text-xs">▸</span>
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Butonlar */}
                <div className="flex gap-3">
                  <button
                    onClick={() => onNavigate('city', city.id)}
                    className="flex-1 py-3 font-serif text-sm tracking-wider uppercase transition-all duration-200"
                    style={{
                      background: `linear-gradient(135deg, ${city.accent}dd, ${city.accent}88)`,
                      color: '#050d1a',
                      border: `1px solid ${city.accent}`,
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.boxShadow = `0 0 20px ${city.accent}50`
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    3D İncele
                  </button>
                  <button
                    onClick={() => onNavigate('timeline', city.id)}
                    className="px-4 py-3 font-serif text-xs tracking-wider uppercase transition-all duration-200"
                    style={{
                      background: 'transparent',
                      color: city.accent,
                      border: `1px solid ${city.accent}50`,
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = `${city.accent}15`
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'transparent'
                    }}
                  >
                    Tarih
                  </button>
                </div>
              </div>

              {/* Alt süsleme */}
              <div className="h-px" style={{ background: `linear-gradient(90deg, transparent, ${city.accent}30, transparent)` }}/>
            </div>

            {/* Hover parlaması */}
            {hoveredCity === city.id && (
              <div
                className="absolute -inset-px rounded-sm pointer-events-none"
                style={{ boxShadow: `0 0 30px ${city.accent}20, inset 0 0 30px ${city.accent}05` }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Alt navigasyon */}
      <div className="relative z-10 border-t border-gold-300/10 px-8 py-6">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4">
          {[
            { label: '⚖️ Şehirleri Karşılaştır', page: 'comparison' as AppPage },
            { label: '📚 Eğitim Paneli', page: 'education' as AppPage },
            { label: '📅 Tarihsel Zaman Çizelgesi', page: 'timeline' as AppPage },
            { label: 'ℹ️ Proje Hakkında', page: 'about' as AppPage },
          ].map(item => (
            <button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              className="btn-outline text-xs"
            >
              {item.label}
            </button>
          ))}
        </div>
        <p className="text-center text-gold-200/25 text-xs font-sans mt-4">
          Bu uygulama eğitim amaçlıdır. 3D modeller tarihsel kaynaklardan esinlenerek oluşturulmuş temsili canlandırmalardır.
          Gerçek mühendislik hesabı veya kesin tarihi doğruluk iddiası taşımaz.
        </p>
      </div>
    </div>
  )
}
