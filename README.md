# Login Formu E2E Testi

React ile yazılmış, Cypress E2E testleri içeren bir login formu uygulaması.

## Özellikler

- Email, şifre ve şartları kabul et alanlarından oluşan login formu
- Form validasyonları: geçerli email, güçlü şifre, zorunlu checkbox
- Tüm validasyonlar geçildiğinde buton aktif olur
- Başarılı girişte Success sayfasına yönlendirme
- Cypress ile yazılmış E2E testler

## Gereksinimler

- Node.js v18 veya üzeri

## Kurulum

```bash
npm install
```

## Çalıştırma

```bash
npm run dev
```

Tarayıcıda `http://localhost:5173` adresini aç.

**Test için geçerli şifre formatı:** En az 8 karakter, 1 büyük harf, 1 rakam, 1 özel karakter (örn: `Test123!`)

## Testleri Çalıştırma

Önce dev server'ı başlat:

```bash
npm run dev
```

Yeni bir terminalde Cypress'i aç:

```bash
npx cypress open
```

Açılan pencerede: E2E Testing → Electron → `login.cy.js`
