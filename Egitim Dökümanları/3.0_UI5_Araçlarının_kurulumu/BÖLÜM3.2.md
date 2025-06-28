# UI5 CLI Komutları ve Build Süreci

## 🔧 Temel CLI Komutları
[⏮ Önceki bölüm: BÖLÜM 2.6](./BÖLÜM3.1%20.md)
- **UI5 CLI Sürümünü Görüntüleme:**
    ```bash
    ui5 --version   # veya kısa hali: ui5 -v
    ```

- **Yardım ve Komut Listesi:**
    ```bash
    ui5 --help      # veya kısa hali: ui5 -h
    ```
    Tüm mevcut komutları ve seçeneklerini listeler.

---

## 🏗️ Build Komutu (`ui5 build`)

- **Build İşlemi:**
    ```bash
    ui5 build
    ```
    Komut çalışınca `dist/` klasörü oluşur ve çeşitli işlemler (task) çalışır.

- **Önemli Görevler:**
    - `Escape non-ASCII characters`: ASCII dışı karakterleri dönüştürür.
    - `replaceCopyright` ve `replaceVersion`: Placeholder’ları değiştirir.
    - `minify`: Kodları sıkıştırır, gereksiz karakterleri kaldırır.

- **Minify Sonrası:**
    - Dosya boyutu küçülür, uygulama daha hızlı yüklenir.

---

## 📦 `component-preload.js` Dosyası

- **Görev:** `generateComponentPreload`
- **Amaç:** Tüm kaynakları tek dosyada toplar.
- **Fayda:** Üretim ortamında performansı artırır.

---

## 🪛 Debug ve Map Dosyaları

- `*-dbg.js`: Debug (hata ayıklama) sürümleridir.
- `.map`: Orijinal ve minify edilmiş kodu eşler, hata ayıklamayı kolaylaştırır.

---

## 🧪 Build Komutuna Parametreler

- **Çıktı Klasörünü Değiştirme:**
    ```bash
    ui5 build --dest build
    ```

- **Klasörü Temizleyerek Build Etme:**
    ```bash
    ui5 build --dest build --clean-dest
    ```

---

## 🎯 Görevleri Dahil Etme veya Hariç Bırakma

- **Sadece Belirli Görevleri Çalıştırmak:**
    ```bash
    ui5 build --exclude-task '*' --include-task minify --include-task generateComponentPreload
    ```

---

## ✅ Sonuç

- Temel komutlar: `ui5 --version`, `ui5 --help`, `ui5 build`
- Build işleminin işleyişi ve çıktıları
- `component-preload.js` dosyasının önemi
- Debug ve map dosyalarının işlevi
- Gelişmiş parametreler: `--dest`, `--clean-dest`, `--include-task`, `--exclude-task`

---

[⏭ Sonraki Bölüm: BÖLÜM 3.3](./BÖLÜM3.3.md)