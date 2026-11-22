# SARSINTI — Şehirlerin Yeniden Tasarımı

XVIII. yüzyılda İstanbul ve Lizbon'u yeniden tasarlayın. Şehir planlaması, yapılaşma ve kamusal alanların deprem riskine karşı rolünü keşfedin.

## 🎯 Proje Amacı

Bu uygulama, XVIII. yüzyılın ikinci yarısında (1750–1800) İstanbul ve Lizbon şehirlerinin deprem riskine karşı yeniden tasarlanmasını inceleyen, **3D ve etkileşimli bir eğitim web uygulamasıdır**.

Kullanıcılar:
- İstanbul ve Lizbon'un tarihsel şehir dokusunu 3D olarak inceleyebilir
- Depreme dayanıklı alternatif şehir planlarını görebilir
- İki yaklaşımı yan yana karşılaştırabilir
- Kavramsal deprem senaryolarını izleyebilir
- Tarihsel zaman çizelgesi ve eğitim içerikleriyle öğrenebilir

## ⚠️ Önemli Notlar

**Bu bir eğitim uygulamasıdır:**
- Bilimsel mühendislik simülatörü değildir
- 3D modeller tarihsel kaynaklardan esinlenen **temsili canlandırmalardır**
- Gerçek mühendislik hesabı veya kesin hasar tahmini üretmez
- Deprem animasyonları sembolik görselleştirmelerdir

**Alternatif planlar:**
- 18. yüzyıl teknolojisi ve mimarisiyle uyumlu kalır
- Modern beton, çelik veya çağdaş altyapı kullanmaz
- Kavramsal planlama önerileridir

## 🚀 Kurulum

### Gereksinimler

- **Node.js** (v18 veya üzeri)
- **npm** veya **yarn**

### Kurulum Adımları

1. **Node.js'i yükleyin** (eğer kurulu değilse):
   - https://nodejs.org adresinden LTS sürümü indirin ve kurun

2. **Bağımlılıkları yükleyin:**
   ```bash
   cd sarsinti
   npm install
   ```

3. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm run dev
   ```

4. **Tarayıcınızda açın:**
   - Genellikle: http://localhost:5173
   - Terminal çıktısında gösterilen URL'yi kullanın

## 🎮 Kullanım

### Ana Sayfa
- İstanbul veya Lizbon kartlarından birini seçin
- Üst menüden diğer sayfalara erişin

### 3D Şehir İnceleme
- **Döndürme:** Sol fare tuşu + sürükle
- **Zoom:** Fare tekerleği
- **Kaydırma:** Sağ fare tuşu + sürükle
- **Bina seçme:** Binaya tıklayın

**Sol Panel:**
- Katmanları açıp kapatabilirsiniz
- Deprem senaryosunu başlatabilirsiniz

**Alt Bar:**
- Tarihsel ve alternatif planlar arasında geçiş yapın

### Karşılaştırma Modu
- İki şehir planını yan yana görün
- Alt tabloda metrik karşılaştırmaları inceleyin

### Tarihsel Zaman Çizelgesi
- Olaylara tıklayarak detayları okuyun
- İstanbul ve Lizbon arasında geçiş yapın

### Eğitim Paneli
- Şehir planlama konularını inceleyin
- Her konuya tıklayarak genişletin

## 🏗️ Teknolojiler

- **React** — Kullanıcı arayüzü
- **TypeScript** — Tip güvenliği
- **Vite** — Hızlı geliştirme ortamı
- **Three.js** — 3D görselleştirme
- **React Three Fiber** — React için Three.js wrapper
- **@react-three/drei** — 3D yardımcı bileşenler
- **Tailwind CSS** — Stil sistemi
- **Lucide Icons** — İkonlar

## 📁 Proje Yapısı

```
sarsinti/
├── src/
│   ├── components/       # React bileşenleri
│   │   ├── city/        # Şehir görüntüleyici bileşenleri
│   │   │   ├── CityScene.tsx
│   │   │   ├── IstanbulScene.tsx
│   │   │   ├── LisbonScene.tsx
│   │   │   ├── CityViewer.tsx
│   │   │   ├── BuildingInfoPanel.tsx
│   │   │   ├── CityLayers.tsx
│   │   │   └── EarthquakeScenario.tsx
│   │   ├── MainMenu.tsx
│   │   ├── CityComparison.tsx
│   │   ├── HistoricalTimeline.tsx
│   │   ├── EducationPanel.tsx
│   │   └── About.tsx
│   ├── data/            # Şehir verileri
│   │   ├── istanbul.ts
│   │   ├── lisbon.ts
│   │   └── education.ts
│   ├── types/           # TypeScript tip tanımları
│   │   └── index.ts
│   ├── App.tsx          # Ana uygulama
│   ├── main.tsx         # Giriş noktası
│   └── index.css        # Global stiller
├── public/              # Statik dosyalar
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## 🛠️ Geliştirme Komutları

```bash
# Geliştirme sunucusu (hot reload)
npm run dev

# Production build
npm run build

# Build önizleme
npm run preview
```

## 🎨 Tasarım Dili

- **Renk Paleti:** Koyu lacivert arka plan, krem/altın yazılar
- **Tipografi:** Serif başlıklar, sans-serif metin
- **Tema:** Antik harita dokularından esinlenen, akademik ve estetik
- **3D Görünüm:** Gerçekçi aydınlatma, gölgeler, dinamik kamera

## 📚 Kaynaklar

Bu proje aşağıdaki konulardan esinlenmiştir:
- 1755 Lizbon Depremi ve Pombaline yeniden yapılanması
- XVIII. yüzyıl İstanbul şehir dokusu
- Tarihsel şehir planlama literatürü
- Deprem dayanıklılığında şehir planlamasının rolü

**Not:** Kesin akademik referanslar için birincil kaynakların incelenmesi önerilir.

## 📝 Lisans

Bu proje TÜBİTAK 2204-A kapsamında geliştirilmiştir.

## 🤝 Katkıda Bulunma

Bu bir eğitim projesidir. Geri bildirimler ve öneriler için lütfen iletişime geçiniz.

## 💡 İpuçları

- **Performans:** Modern bir tarayıcı kullanın (Chrome, Firefox, Edge)
- **3D Performans:** Düşük performanslı cihazlarda katmanları kapatarak performans artırabilirsiniz
- **Deprem Senaryosu:** Animasyon semboliktir, gerçek fizik simülasyonu değildir
- **Mobil:** Uygulama masaüstü için optimize edilmiştir, mobilde temel işlevler çalışır

## 🐛 Sorun Giderme

**3D sahne yüklenmiyor:**
- Tarayıcınızın WebGL desteğini kontrol edin
- Grafik sürücülerinizi güncelleyin

**Yavaş performans:**
- Deprem senaryosunu kapatın
- Bazı katmanları gizleyin
- Tarayıcı sekmelerini azaltın

**npm install hataları:**
- Node.js sürümünüzü kontrol edin (v18+)
- `node_modules` ve `package-lock.json` dosyalarını silin, tekrar `npm install` çalıştırın

---

**SARSINTI** — Şehirlerin Yeniden Tasarımı  
*XVIII. Yüzyıl Şehir Planlaması · İstanbul ve Lizbon*
