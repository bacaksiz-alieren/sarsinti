import React from 'react'
import { Eye, EyeOff } from 'lucide-react'
import type { LayerConfig, LayerType } from '../../types'

interface Props {
  layers: LayerConfig[]
  activeLayers: Set<LayerType>
  onToggle: (layer: LayerType) => void
  onToggleAll: (visible: boolean) => void
}

export default function CityLayers({ layers, activeLayers, onToggle, onToggleAll }: Props) {
  const allVisible = layers.every(l => activeLayers.has(l.id))
  const noneVisible = layers.every(l => !activeLayers.has(l.id))

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-sans tracking-widest uppercase text-gold-200/50">
          Katmanlar
        </span>
        <div className="flex gap-1">
          <button
            onClick={() => onToggleAll(true)}
            className="text-xs font-sans px-2 py-0.5 transition-colors"
            style={{
              color: allVisible ? '#d4a843' : '#d4a84388',
              border: '1px solid rgba(212,168,67,0.2)',
            }}
          >
            Tümü
          </button>
          <button
            onClick={() => onToggleAll(false)}
            className="text-xs font-sans px-2 py-0.5 transition-colors"
            style={{
              color: noneVisible ? '#d4a843' : '#d4a84388',
              border: '1px solid rgba(212,168,67,0.2)',
            }}
          >
            Gizle
          </button>
        </div>
      </div>

      <div className="space-y-1.5">
        {layers.map(layer => {
          const isVisible = activeLayers.has(layer.id)
          return (
            <button
              key={layer.id}
              onClick={() => onToggle(layer.id)}
              className="w-full flex items-center gap-2.5 px-3 py-2 transition-all duration-150 text-left"
              style={{
                background: isVisible ? 'rgba(212,168,67,0.08)' : 'rgba(212,168,67,0.02)',
                border: `1px solid ${isVisible ? 'rgba(212,168,67,0.25)' : 'rgba(212,168,67,0.08)'}`,
                opacity: isVisible ? 1 : 0.55,
              }}
            >
              {/* Renk noktası */}
              <div
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ background: isVisible ? layer.color : '#555' }}
              />
              {/* Etiket */}
              <span
                className="flex-1 text-xs font-sans"
                style={{ color: isVisible ? '#e8d8b8' : '#888' }}
              >
                {layer.label}
              </span>
              {/* Göz ikonu */}
              <span style={{ color: isVisible ? '#d4a84380' : '#44444480' }}>
                {isVisible ? <Eye size={12} /> : <EyeOff size={12} />}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
