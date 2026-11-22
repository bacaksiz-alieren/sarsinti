import React from 'react'
import { ArrowLeft, Info, AlertCircle, Lightbulb, BookOpen } from 'lucide-react'
import type { AppPage } from '../types'

interface Props {
  onNavigate: (page: AppPage) => void
}

export default function About({ onNavigate }: Props) {
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
        <Info size={14} className="text-gold-300" />
        <span className="text-sm font-serif text-cream">Proje Hakkında</span>
      </div>

      {/* İçerik */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-6 py-10">

          {/* Başlık */}
          <div className="text-center mb-10">
            <h1 className="font-serif text-6xl font-bold text-cream mb-3 tracking-widest"
              style={{ textShadow: '0 0 40px rgba(212,168,67,0.3)' }}>
              SARSINTI
            </h1>
            <p className="text-gold-200/70 font-serif text-xl italic mb-2">
              Şehirlerin Yeniden Tasarımı
            </p>
            <p className="text-parchment/50 font-sans text-sm">
              XVIII. Yüzyıl Şehir Planlaması · İstanbul ve Lizbon
            </p>
          </div>

          {/* Proje Amacı */}
          <section className="mb-8 panel-glass p-5">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb size={16} className="text-gold-300" />
              <h2 className="font-serif text-lg text-cream">Proje Amacı</h2>
            </div>
            <p className="text-sm text-parchment/75 font-sans leading-relaxed mb-3">
              Bu uygulama, XVIII. yüzyılın ikinci yarısında (1750–1800) İstanbul ve Lizbon şehirlerinin
              deprem riskine karşı yeniden tasarlanmasını inceleyen eğitim amaçlı bir simülasyondur.
            </p>
            <p className="text-sm text-parchment/75 font-sans leading-relaxed">
              Kullanıcılar, 3D şehir modelleri üzerinden tarihsel şehir dokusunu inceleyebilir,
              alternatif depreme dayanıklı planlama önerilerimizi görebilir ve iki yaklaşımı
              karşılaştırabilir.
            </p>
          </section>

          {/* Özellikler */}
          <section className="mb-8">
            <h2 className="font-serif text-lg text-cream mb-4 flex items-center gap-2">
              <span className="text-gold-300">⚙️</span>
              Uygulama Özellikleri
            </h2>
            <div className="space-y-2">
              {[
                '3D etkileşimli şehir modelleri (İstanbul ve Lizbon)',
                'Tarihsel ve alternatif şehir planları arasında geçiş',
                'Katman sistemi ile yapı türlerini filtreleme',
                'Binalara tıklayarak detaylı bilgi görüntüleme',
                'Kavramsal deprem senaryosu animasyonu',
                'Yan yana şehir planı karşılaştırma modu',
                'Tarihsel zaman çizelgesi',
                'Eğitim paneli — şehir planlaması ve deprem güvenliği',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-parchment/70 font-sans">
                  <span className="text-gold-300 flex-shrink-0">▸</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Teknoloji */}
          <section className="mb-8 panel-glass p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-gold-300">🔧</span>
              <h2 className="font-serif text-lg text-cream">Teknolojiler</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                'React', 'TypeScript', 'Vite', 'Three.js', 'React Three Fiber',
                '@react-three/drei', 'Tailwind CSS', 'Lucide Icons',
              ].map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-sans"
                  style={{
                    background: 'rgba(212,168,67,0.08)',
                    border: '1px solid rgba(212,168,67,0.2)',
                    color: '#d4a843',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Önemli Notlar */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle size={16} className="text-orange-400" />
              <h2 className="font-serif text-lg text-cream">Önemli Notlar</h2>
            </div>
            <div className="space-y-3">
              <div className="p-4" style={{ background: 'rgba(212,168,67,0.06)', border: '1px solid rgba(212,168,67,0.15)' }}>
                <p className="text-xs font-sans text-gold-200/60 leading-relaxed">
                  <strong className="text-gold-300">Eğitim Amaçlı:</strong> Bu uygulama bilimsel bir mühendislik
                  simülatörü değildir. Deprem dayanıklılığına ilişkin görselleştirmeler kavramsal, tarihsel
                  ve eğitim amaçlıdır. Gerçek mühendislik hesapları veya kesin hasar tahminleri üretmez.
                </p>
              </div>
              <div className="p-4" style={{ background: 'rgba(212,168,67,0.06)', border: '1px solid rgba(212,168,67,0.15)' }}>
                <p className="text-xs font-sans text-gold-200/60 leading-relaxed">
                  <strong className="text-gold-300">Temsili Modeller:</strong> 3D şehir modelleri tarihsel
                  kaynaklardan esinlenerek oluşturulmuş temsili canlandırmalardır. Birebir harita veya
                  mimari doğruluk iddiası taşımaz.
                </p>
              </div>
              <div className="p-4" style={{ background: 'rgba(212,168,67,0.06)', border: '1px solid rgba(212,168,67,0.15)' }}>
                <p className="text-xs font-sans text-gold-200/60 leading-relaxed">
                  <strong className="text-gold-300">Tarihsel Bağlam:</strong> Alternatif şehir planları
                  18. yüzyıl teknolojisi ve mimarisiyle uyumlu olmaya çalışır. Modern betonarme, çelik
                  veya çağdaş altyapı sistemleri kullanılmamıştır.
                </p>
              </div>
            </div>
          </section>

          {/* Kaynaklar ve Referanslar */}
          <section className="mb-8 panel-glass p-5">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen size={16} className="text-gold-300" />
              <h2 className="font-serif text-lg text-cream">Kaynaklar ve Referanslar</h2>
            </div>
            <p className="text-xs text-parchment/60 font-sans leading-relaxed">
              Bu proje, İstanbul ve Lizbon'un 18. yüzyıl tarihine dair genel kaynaklardan,
              1755 Lizbon Depremi hakkındaki akademik çalışmalardan ve şehir planlama literatüründen
              esinlenerek hazırlanmıştır. Kesin tarihsel veriler ve akademik amaçlı kullanım için
              birincil kaynakların incelenmesi önerilir.
            </p>
          </section>

          {/* Geliştirici Notu */}
          <section className="panel-glass p-5 mb-8">
            <h2 className="font-serif text-lg text-cream mb-3">Geliştirici Notu</h2>
            <p className="text-sm text-parchment/70 font-sans leading-relaxed mb-3">
              SARSINTI, tarihi şehir dokularını ve afet sonrası yeniden yapılanma süreçlerini
              görselleştirerek şehir planlama farkındalığı yaratmayı hedefleyen bir eğitim projesidir.
            </p>
            <p className="text-sm text-parchment/70 font-sans leading-relaxed">
              Kullanıcı geri bildirimleri ve öneriler için lütfen iletişime geçiniz.
            </p>
          </section>

          {/* Alt navigasyon */}
          <div className="text-center pt-6 border-t border-gold-300/10">
            <p className="text-xs text-gold-200/30 font-sans mb-4">
              TÜBİTAK 2204-A Projesi · 2026
            </p>
            <div className="flex justify-center gap-3">
              <button onClick={() => onNavigate('home')} className="btn-gold text-xs">
                Ana Sayfaya Dön
              </button>
              <button onClick={() => onNavigate('education')} className="btn-outline text-xs">
                Eğitim Paneli
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
