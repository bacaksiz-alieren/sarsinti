import React, { useState, useEffect, useRef } from 'react'
import { Zap, X, ChevronRight, AlertTriangle } from 'lucide-react'
import type { PlanMode } from '../../types'

interface Props {
  active: boolean
  intensity: number
  planMode: PlanMode
  onStart: () => void
  onStop: () => void
  onSwitchPlan: () => void
}

const steps = [
  {
    id: 0,
    title: 'Deprem Başladı',
    icon: '⚡',
    text: 'Şehir sallanıyor. Bu sembolik bir görselleştirmedir; gerçek deprem fiziğini temsil etmez.',
    highlight: null,
  },
  {
    id: 1,
    title: 'Dar Sokak Sorunu',
    icon: '🚧',
    text: 'Dar sokaklar ulaşım güzergâhlarını bloke edebilir. Yoğun yapı dokusu, enkaz ve yangın riskini artırır.',
    highlight: 'streets',
  },
  {
    id: 2,
    title: 'Açık Alanların Önemi',
    icon: '🟢',
    text: 'Açık meydanlar ve avlular, güvenli toplanma için kritiktir. Bu alanlara yönelmek temel bir eylemdir.',
    highlight: 'openSpaces',
  },
  {
    id: 3,
    title: 'Planlama Farkını İncele',
    icon: '📐',
    text: 'Alternatif şehir planına geç. Geniş yollar, dağıtılmış açık alanlar ve daha az yoğun yapılaşmayı karşılaştır.',
    highlight: null,
    action: 'switch',
  },
]

export default function EarthquakeScenario({ active, intensity, planMode, onStart, onStop, onSwitchPlan }: Props) {
  const [currentStep, setCurrentStep] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (active) {
      setCurrentStep(0)
      intervalRef.current = setInterval(() => {
        setCurrentStep(prev => {
          if (prev < steps.length - 1) return prev + 1
          return prev
        })
      }, 3500)
    } else {
      setCurrentStep(0)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [active])

  if (!active) {
    return (
      <div className="p-3">
        <div className="mb-3">
          <span className="text-xs font-sans tracking-widest uppercase text-gold-200/50">
            Deprem Senaryosu
          </span>
        </div>

        <div className="p-3 mb-3" style={{
          background: 'rgba(200,80,40,0.08)',
          border: '1px solid rgba(200,80,40,0.2)',
        }}>
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle size={12} style={{ color: '#e08060' }} />
            <span className="text-xs text-gold-200/60 font-sans">Eğitim Amaçlı Görselleştirme</span>
          </div>
          <p className="text-xs font-sans leading-relaxed" style={{ color: '#c88060' }}>
            Bu özellik gerçek deprem fiziğini simüle etmez. Yalnızca şehir planlamasının
            önemini göstermek için sembolik bir animasyon sunar.
          </p>
        </div>

        <button
          onClick={onStart}
          className="w-full flex items-center justify-center gap-2 py-2.5 font-serif text-sm tracking-wider transition-all duration-200"
          style={{
            background: 'rgba(200,80,40,0.15)',
            border: '1px solid rgba(200,80,40,0.4)',
            color: '#e08060',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(200,80,40,0.25)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(200,80,40,0.15)' }}
        >
          <Zap size={14} />
          Senaryoyu Başlat
        </button>
      </div>
    )
  }

  const step = steps[currentStep]

  return (
    <div className="p-3">
      {/* Başlık */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#e06030' }} />
          <span className="text-xs font-sans tracking-widest uppercase" style={{ color: '#e08060' }}>
            Senaryo Aktif
          </span>
        </div>
        <button
          onClick={onStop}
          className="text-gold-200/40 hover:text-gold-200 transition-colors"
        >
          <X size={14} />
        </button>
      </div>

      {/* Yoğunluk çubuğu */}
      <div className="mb-3">
        <div className="flex justify-between text-xs font-sans text-gold-200/40 mb-1">
          <span>Sarsıntı Yoğunluğu</span>
          <span>{Math.round(intensity * 100)}%</span>
        </div>
        <div className="h-1.5" style={{ background: 'rgba(255,255,255,0.1)' }}>
          <div
            className="h-full transition-all duration-300"
            style={{
              width: `${intensity * 100}%`,
              background: `linear-gradient(90deg, #e06030, #e09030)`,
            }}
          />
        </div>
      </div>

      {/* Adım kartı */}
      <div
        className="p-3 mb-3 fade-in"
        style={{ background: 'rgba(200,80,40,0.1)', border: '1px solid rgba(200,80,40,0.25)' }}
        key={step.id}
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg">{step.icon}</span>
          <span className="text-sm font-serif text-cream">{step.title}</span>
        </div>
        <p className="text-xs font-sans leading-relaxed" style={{ color: '#d0b898' }}>
          {step.text}
        </p>
      </div>

      {/* Adım göstergesi */}
      <div className="flex gap-1.5 mb-3">
        {steps.map((s, i) => (
          <div
            key={s.id}
            className="h-1 flex-1 transition-all duration-300"
            style={{
              background: i <= currentStep ? '#e06030' : 'rgba(255,255,255,0.1)',
            }}
          />
        ))}
      </div>

      {/* Eylem butonları */}
      {step.action === 'switch' && (
        <button
          onClick={onSwitchPlan}
          className="w-full flex items-center justify-center gap-2 py-2.5 font-serif text-xs tracking-wider mb-2 transition-all duration-200"
          style={{
            background: 'rgba(74,160,74,0.15)',
            border: '1px solid rgba(74,160,74,0.4)',
            color: '#7ada7a',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(74,160,74,0.25)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(74,160,74,0.15)' }}
        >
          <ChevronRight size={14} />
          {planMode === 'historical' ? 'Alternatif Plana Geç' : 'Tarihsel Plana Dön'}
        </button>
      )}

      <button
        onClick={onStop}
        className="w-full py-2 font-serif text-xs tracking-wider transition-all duration-200"
        style={{
          background: 'transparent',
          border: '1px solid rgba(212,168,67,0.2)',
          color: '#d4a84380',
        }}
      >
        Senaryoyu Sonlandır
      </button>

      <p className="text-xs font-sans text-gold-200/25 mt-2 leading-relaxed">
        Bu animasyon gerçek deprem fiziğini simüle etmez. Yalnızca eğitim amaçlıdır.
      </p>
    </div>
  )
}
