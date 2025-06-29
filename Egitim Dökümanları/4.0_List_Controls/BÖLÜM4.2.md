
# UI5 Kontrolleri Stil Verme

[⏮ Önceki bölüm: BÖLÜM 4.1](BÖLÜM4.1.md)
## Giriş

Bu derste UI5 kontrollerine nasıl stil verebileceğimizi öğreniyoruz. İki temel yol mevcut:

1. **SAP tarafından sağlanan ön tanımlı CSS sınıfları**
2. **Özel CSS dosyaları oluşturmak**

---

## Ön Tanımlı CSS Sınıfları

### Margin (Kenar Boşluğu)

- **Tiny**: 8px  
- **Small**: 16px  
- **Medium**: 32px  
- **Large**: 48px

Örnek:
```xml
<Input class="sapUiTinyMargin"/>
```

#### Tek taraflı margin:
- `sapUiTinyMarginTop`
- `sapUiTinyMarginBottom`
- `sapUiTinyMarginBegin`
- `sapUiTinyMarginEnd`

#### İki taraflı margin:
- `sapUiTinyMarginTopBottom`
- `sapUiTinyMarginBeginEnd`

### Responsive Margin

- `sapUiResponsiveMargin`  
  - **< 600px**: sadece aşağıya 16px  
  - **600px–1023px**: 16px (bölgesel)  
  - **≥ 1024px**: üst/alt 16px, baş/son 32px

---

## Padding (İç Boşluk)

Sadece belirli kontrollerde çalışır (örn. `Page`, `Panel`, `Dialog`)

### Sınıflar

- `sapUiNoContentPadding`: padding yok
- `sapUiContentPadding`: 16px padding
- `sapUiResponsiveContentPadding`: ekran boyutuna göre padding

```xml
<Page class="sapUiResponsiveContentPadding">
```

---

## Özel CSS Dosyası Kullanmak

### 1. CSS Dosyası Oluşturma

- `webapp/css/style.css`

### 2. `manifest.json` Dosyasına Ekleme

```json
"sap.ui5": {
  "resources": {
    "css": [
      {
        "uri": "css/style.css"
      }
    ]
  }
}
```

### 3. Özel Stil Uygulama

Örneğin, liste başlığını küçültmek:

#### style.css:
```css
.myProductsList .listWithSmallerTitle > header {
  font-size: 1rem;
}
```

#### XML’de sınıf ekleme:
```xml
<List class="existingClass listWithSmallerTitle"/>
```

---

## Çakışmaları Önlemek için Namespace Kullanımı

Örneğin tüm özel sınıfları kapsamak için:

```xml
<App class="myProductsList"/>
```

```css
.myProductsList .listWithSmallerTitle > header {
  font-size: 1rem;
}
```

[⏭ Sonraki Bölüm: BÖLÜM 4.3](BÖLÜM4.3.md)

---

## Sonuç

- SAP'nin sunduğu ön tanımlı sınıflar hızlı çözümler sunar.
- Daha özelleştirilmiş ihtiyaçlar için kendi CSS dosyanı kullan.
- Ortamda çakışmaları önlemek için özel namespace kullanmayı unutma.
