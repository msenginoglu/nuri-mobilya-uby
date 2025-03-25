# Nuri Mobilya Web Sitesi

Bu proje, Üçüncü Binyıl Akademi kapsamında Muhammet Şükrü ENGİNOĞLU tarafından geliştirilen modern ve duyarlı bir web sitesini içermektedir. Hayali bir şirket olan Nuri Mobilya için hazırlanan bu site, Tailwind CSS kullanılarak oluşturulmuş, mobil dostu ve SEO uyumlu bir çalışmadır.

## Proje Hakkında

Üçüncü Binyıl Akademi'nin front-end eğitiminin bir parçası olarak geliştirilen bu proje, öğrencilere modern web geliştirme teknikleri ve best practice uygulamaları göstermek amacıyla tasarlanmıştır. Proje, profesyonel düzeyde bir web sitesinin nasıl oluşturulacağına dair kapsamlı bir örnek sunmaktadır.

## Özellikler

- Responsive tasarım (mobil, tablet ve masaüstü uyumlu)
- Modern UI/UX prensipleri
- Tailwind CSS ile hızlı ve optimize edilmiş stil sistemi
- SEO dostu yapı
- Proje filtreleme sistemi
- Mobil menü işlevselliği
- Performans odaklı geliştirme

## Teknolojiler

- HTML5
- Tailwind CSS
- JavaScript (Vanilla)

## Kurulum ve Çalıştırma

### ⚠️ ÖNEMLİ: Projeyi Farklı Bilgisayarda Çalıştırma

Eğer bu projeyi farklı bir bilgisayara taşıdıysanız veya ZIP dosyasından çıkardıysanız, Tailwind CSS'in düzgün çalışması için aşağıdaki adımları izlemelisiniz:

1. Proje klasöründe terminal/komut istemcisini açın

2. Gerekli paketleri yükleyin:

   npm install

3. Tailwind CSS'i derleyin:

   npx tailwindcss -i ./src/css/input.css -o ./src/css/output.css

> **Not:** Bu adımları tamamladıktan sonra site düzgün şekilde görüntülenecektir. Eğer bu adımları atlarsanız, stil uygulanmamış bir sayfa görebilirsiniz!

### Geliştirme Sırasında

Geliştirme yaparken, CSS değişikliklerinin otomatik olarak derlenmesi için aşağıdaki komutu kullanabilirsiniz:

npx tailwindcss -i ./src/css/input.css -o ./src/css/output.css --watch

### Üretim (Production) İçin

Üretim ortamına deployment yapmadan önce CSS dosyasını optimize etmek için:

npx tailwindcss -i ./src/css/input.css -o ./src/css/output.css --minify

## Proje Yapısı

- `index.html` - Ana sayfa
- `src/css/` - CSS dosyaları
  - `input.css` - Tailwind direktiflerini içeren kaynak dosya
  - `output.css` - Derlenen CSS dosyası
- `src/js/` - JavaScript dosyaları
  - `main.js` - Ana JavaScript dosyası
- `tailwind.config.js` - Tailwind yapılandırma dosyası

## Eğitim ve Geliştirme Amacı

Bu proje, Üçüncü Binyıl Akademi'de verilen eğitimler kapsamında, öğrencilere:

- Modern web teknolojilerinin kullanımı
- Responsive tasarım ilkeleri
- JavaScript ile DOM manipülasyonu
- Tailwind CSS ile hızlı ve verimli stil geliştirme
- SEO dostu web sitesi oluşturma

konularında pratik deneyim sağlamak için geliştirilmiştir.

## İletişim

Bu proje veya Üçüncü Binyıl Akademi'de verilen eğitimler hakkında daha fazla bilgi için:

- **Eğitmen:** Muhammet Şükrü E.
- **Kurum:** Üçüncü Binyıl Akademi
- **E-posta:** bilgi@ucuncubinyil.com
- **Web:** www.ucuncubinyil.com

---

© 2025 Üçüncü Binyıl Akademi | Tüm hakları saklıdır.
