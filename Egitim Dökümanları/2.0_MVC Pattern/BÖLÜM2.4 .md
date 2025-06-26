# 📦 SAPUI5 - Component Yapısı ile Uygulama Kapsülleme

Bu bölümde, uygulamanın **Component** yapısına kapsüllenmesiyle yeniden kullanılabilir ve esnek bir mimari oluşturulması anlatılmaktadır.

---

## 🎯 Amaç

- **Yeniden kullanılabilirlik:** Component'ler bağımsızdır, farklı uygulamalarda tekrar kullanılabilir.
- **Esneklik:** Statik HTML yerine SAP Fiori Launchpad gibi ortamlara uyumlu hale gelir.

---

## 🔧 Yapılan Adımlar

1. `webapp` klasörü oluşturuldu ve tüm mevcut dosyalar bu klasöre taşındı.
2. `webapp` içinde `Component.js` dosyası oluşturuldu.
![](/Image/2/2.4/1.webapp_içeriği.png)
3. `Component.js` dosyasında:
    - `sap.ui.define` ile tanımlama yapıldı.
    - `sap.ui.core.UIComponent` sınıfı extend edildi.
    - `metadata` nesnesi tanımlandı:
        - `interfaces`: `sap.ui.core.IAsyncContentCreation`
        - `rootView`: Başlangıç XML view (`ui5.productlist.view.App`)
        - `type`: XML
        - `id`: App
```js
sap.ui.define(["sap/ui/core/UIComponent", function (UIComponent) {
    "use strict";

    return UIComponent.extend("ui5.product.Componenet", {
        metadata: {
            interface: ["sap.ui.core.IAsyncContentCreation"],
            rootView: {
                viewName: "ui5.product.list.view.App",
                type: "XML",
                id: "app"
            }
        }
    }
    )
}
]
)
```

4. `index.js` güncellendi:
    - Önceki XML view kaldırıldı.
    - Yerine `sap.ui.core.ComponentContainer` import edildi.
    - Yeni component container oluşturuldu:
        - `name`: `ui5.productlist`
        - `id`: `ui5.productlist`
        - `async`: `true`
    - Uygulama, `placeAt("content")` ile sayfaya yerleştirildi.

---

## 🐛 Karşılaşılan Hata

- `Component.js` dosyasında dependencies hatası (eksik parantez) oluştu, düzeltildi.

---

## 📌 Sonuç

- Uygulama, component olarak başarıyla çalıştı.
- Console'da bazı `preload.js` hataları mevcut (build sırasında çözülecek).

---

## 📚 Sonraki Adım

- Uygulamaya internationalization (**i18n**) desteği eklenecek.