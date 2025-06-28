# UI5 Tooling CLI Kurulumu ve Yapılandırması

[⏮ Önceki bölüm: BÖLÜM 2.6](/Egitim%20Dökümanları/2.0_MVC%20Pattern/BÖLÜM2.6%20.md)

Bu bölümde, **UI5 Tooling CLI**’yi kuracak ve yapılandıracağız. UI5 Tooling, geliştirme sunucusu, derleyici (builder), özel middleware’ler ve daha fazlasını sunarak daha iyi bir geliştirme ortamı sağlar.

## 1. Proje Dizini ve npm Başlatma

Öncelikle projenizin kök klasöründe bir terminal açın ve aşağıdaki komutu çalıştırarak `package.json` dosyasını oluşturun:

```bash
npm init -y
```

## 2. UI5 CLI Kurulumu

### Global Kurulum

UI5 CLI’yi global olarak kurmak için:

```bash
npm install --global @ui5/cli
```

Eğer izin hatası alırsanız, komutu `sudo` ile çalıştırabilirsiniz:

```bash
sudo npm install --global @ui5/cli
```

### Lokal Kurulum

Projeye özel yapılandırmalar için UI5 CLI’yi lokal olarak da kurmak önerilir:

```bash
npm install @ui5/cli --save-dev
```

Kurulumdan sonra, `package.json` dosyanızda `@ui5/cli` bağımlılığını görebilirsiniz.

## 3. UI5 Tooling Yapılandırması

Yapılandırmayı başlatmak için:

```bash
ui5 init
```

Bu komut, kök dizinde `ui5.yaml` dosyası oluşturur.

### ui5.yaml Dosyası Temel Yapısı

```yaml
specVersion: "4.0"
metadata:
  name: ui5.product.list
type: application
framework:                
  name: SAPUI5
  version: "1.73.1"
  libraries:
    - name: sap.ui.core
    - name: sap.m
    - name: themelib_sap_horizon
      optional: true
```

- **specVersion**: UI5 Tooling spesifikasyon sürümüdür.
- **metadata > name**: Projenize özel ve eşsiz bir isim olmalı, genellikle uygulamanın namespace’i kullanılır.
- **type**: `application`, `library`, `theme-library` veya `module` olabilir. Uygulama için `application` seçilir.
- **framework**: SAPUI5 sürümü ve gerekli kütüphaneler tanımlanır.

## 4. Geliştirme Sunucusunu Başlatma

UI5 Tooling hazır olduğunda geliştirme sunucusunu başlatmak için:

```bash
ui5 serve
```

Konsolda `Server started at http://localhost:8080` mesajını göreceksiniz. Tarayıcıdan bu adresi ziyaret ederek uygulamanızı test edebilirsiniz.

## 5. Faydalı Komut Parametreleri

- `--port` veya `-p`: Varsayılan port 8080’dir, farklı bir port belirleyebilirsiniz.
- `--open` veya `-o`: Sunucu başlatıldığında tarayıcı otomatik olarak açılır.

> Örnek:
> ```bash
> ui5 serve --port 5534 --open
> ```

---

[⏭ Sonraki Bölüm: BÖLÜM 3.2](./BÖLÜM3.2.md)