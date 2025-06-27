# 1. manifest.json Oluşturulması
[⏮ Önceki bölüm: BÖLÜM 2.5](./BÖLÜM2.5%20.md)
`webapp/manifest.json` dosyası oluşturulur ve aşağıdaki temel yapı eklenir:

```json
{
    "_version": "1.73.1",
    "sap.app": {
        "id": "ui5.product.list",
        "type": "application",
        "i18n": "i18n/i18n.properties",
        "title": "{{appTitle}}",
        "description": "{{appDescription}}",
        "applicationVersion": {
            "version": "1.0.0"
        }
    },
    "sap.ui": {
        "technology": "UI5",
        "deviceTypes": {
            "desktop": true,
            "tablet": true,
            "phone": true
        }
    },
    "sap.ui5": {
        "rootView": {
            "viewName": "ui5.product.list.view.App",
            "type": "XML"
        },
        "dependencies": {
            "minUI5Version": "1.114",
            "libs": {
                "sap.m": {},
                "sap.ui.layout": {},
                "sap.ui.core": {}
            }
        },
        "contentDensification": {
            "compact": true,
            "cozy": true
        },
        "models": {
            "i18n": {
                "type": "sap/ui/model/resource/ResourceModel",
                "settings": {
                    "bundleName": "ui5.product.list.i18n.i18n"
                }
            }
        }
    }
}
```

---

## 2. i18n.properties Dosyasına Tanımlar Eklenir

`i18n/i18n.properties` dosyasına aşağıdaki tanımlar eklenir:

```properties
apptTitle=Ürün Yönetimi
appDescription=Ürünlerinizi yönetin ve düzenleyin
```

---

## 3. index.html Dosyasının Güncellenmesi

`index.js` çağrısı kaldırılır. Artık uygulama şu şekilde başlatılır:

```html
<body class="sapUiBody" id="content">
    <div 
    data-sap-ui-component data-name="ui5.product.list"
     data-id="container"
      data-settings='{"id": "ui5.demo"}'>

    </div>
</body>
```

---

## 4. component.js Dosyası Temizlenir

Manuel yapılan `rootView` ve `i18n` model tanımlamaları kaldırılır. Yerine `manifest: "json"` satırı eklenir.

---

## 5. index.js Artık Gerekli Değil

`index.js` dosyası silinir.

---

## 6. Uygulama Test Edilir

Tüm bu değişikliklerden sonra uygulama çalışıyor olmalı. DOM'da oluşturulan `div` incelenerek `data-*` parametrelerinin uygulandığı doğrulanır.
[⏭ Sonraki Bölüm: BÖLÜM 3.1](./BÖLÜM3.1%20.md)