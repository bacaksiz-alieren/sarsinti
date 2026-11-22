# 🚀 SARSINTI Deployment Rehberi

Projenizi internete yüklemek için 3 kolay yöntem:

---

## ⭐ Yöntem 1: VERCEL (ÖNERİLEN - EN KOLAY)

### Neden Vercel?
- ✅ Tamamen ücretsiz
- ✅ Otomatik HTTPS
- ✅ Son derece hızlı
- ✅ GitHub ile otomatik güncelleme
- ✅ 5 dakikada hazır

### Adım 1: GitHub'a Yükleyin

```bash
# Proje klasöründe
git init
git add .
git commit -m "Initial commit - SARSINTI project"
```

**GitHub'da yeni repo oluşturun:**
1. https://github.com/new adresine gidin
2. Repository adı: `sarsinti`
3. Public seçin
4. "Create repository"

```bash
# Terminalinizde (KULLANICI_ADINIZ yerine kendi kullanıcı adınızı yazın)
git remote add origin https://github.com/KULLANICI_ADINIZ/sarsinti.git
git branch -M main
git push -u origin main
```

### Adım 2: Vercel'e Deploy

1. **Vercel'e gidin:** https://vercel.com
2. **Sign Up:** GitHub hesabınızla giriş yapın
3. **Add New Project:** 
   - "Add New" butonuna tıklayın
   - "Project" seçin
4. **Import Git Repository:**
   - `sarsinti` reponuzu seçin
5. **Configure:**
   - Framework Preset: **Vite** (otomatik seçilir)
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - **DEPLOY** butonuna tıklayın

### ✅ Hazır!

5 dakika sonra projeniz şu şekilde bir linkte yayında:
```
https://sarsinti.vercel.app
```
veya
```
https://sarsinti-KULLANICI-ADINIZ.vercel.app
```

**Artık her GitHub'a push yaptığınızda otomatik güncellenir!**

---

## 🌐 Yöntem 2: NETLIFY

### Adım 1: GitHub'a Yükleyin
(Yukarıdaki Vercel adımlarıyla aynı)

### Adım 2: Netlify'a Deploy

1. https://netlify.com → Sign Up (GitHub ile)
2. "Add new site" → "Import from Git"
3. GitHub → `sarsinti` reponuzu seçin
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. **Deploy** butonuna tıklayın

### ✅ Hazır!
```
https://SITE-ISMINIZ.netlify.app
```

---

## 📄 Yöntem 3: GITHUB PAGES

### Adım 1: vite.config.ts'yi Güncelleyin

Dosya zaten güncellendi:
```typescript
base: '/sarsinti/',
```

### Adım 2: GitHub'a Yükleyin

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/KULLANICI_ADINIZ/sarsinti.git
git branch -M main
git push -u origin main
```

### Adım 3: Deploy

```bash
# gh-pages paketini yükleyin
npm install

# Deploy edin
npm run deploy
```

### Adım 4: GitHub Settings

1. GitHub reponuza gidin
2. Settings → Pages
3. Source: **gh-pages** branch seçin
4. Save

### ✅ Hazır!
```
https://KULLANICI_ADINIZ.github.io/sarsinti/
```

---

## 🔄 Güncelleme Nasıl Yapılır?

### Vercel / Netlify:
```bash
git add .
git commit -m "Update: açıklama"
git push
```
Otomatik güncellenir! ✨

### GitHub Pages:
```bash
npm run deploy
```

---

## 🎯 Hangi Yöntemi Seçmeliyim?

| Özellik | Vercel | Netlify | GitHub Pages |
|---------|--------|---------|--------------|
| Hız | ⚡⚡⚡ | ⚡⚡⚡ | ⚡⚡ |
| Kolay Kurulum | ✅ | ✅ | ⚠️ |
| Otomatik Deploy | ✅ | ✅ | Manuel |
| Ücretsiz | ✅ | ✅ | ✅ |
| Özel Domain | ✅ | ✅ | ✅ |

**ÖNERİ:** Vercel ile başlayın. En kolay ve en hızlı! 🚀

---

## 📱 Sosyal Medyada Paylaşın

Projeniz yayına alındıktan sonra:

**Twitter / X:**
```
🏛️ SARSINTI — Şehirlerin Yeniden Tasarımı

XVIII. yüzyıl İstanbul ve Lizbon'u 3D'de keşfedin. 
Deprem dayanıklı şehir planlamasını interaktif olarak öğrenin.

🔗 [LINK]

#ŞehirPlanlama #Tarih #3D #TÜBİTAK
```

**LinkedIn:**
```
TÜBİTAK 2204-A projesi olarak geliştirdiğim SARSINTI uygulaması ile 
XVIII. yüzyılda İstanbul ve Lizbon'un deprem riskine karşı 
nasıl yeniden tasarlanabileceğini 3D olarak inceleyebilirsiniz.

React, Three.js ve TypeScript ile geliştirilmiş etkileşimli 
bir eğitim platformu.

[LINK]
```

---

## ⚠️ Sorun mu Yaşıyorsunuz?

### "npm: command not found"
Node.js'i kurun: https://nodejs.org

### "git: command not found"
Git'i kurun: https://git-scm.com/download/win

### Build hatası
```bash
npm install
npm run build
```

### Deploy çalışmıyor
1. `.gitignore` dosyasını kontrol edin
2. `node_modules` ve `dist` klasörlerini silip tekrar deneyin
3. `npm install` çalıştırın

---

**Başarılar! 🎉**

Sorularınız için: GitHub Issues kullanabilirsiniz.
