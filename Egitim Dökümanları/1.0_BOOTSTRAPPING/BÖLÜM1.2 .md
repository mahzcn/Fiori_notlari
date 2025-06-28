
## Index html dosyası ana verilerimin tutulduğu dosyadır 

`index.html` dosyası, projenin ana giriş noktasıdır ve temel yapıyı, gerekli script ve stil dosyalarına referansları içerir.


## index.js dosyası oluşturuldu

`index.js` dosyası projeye eklenmiştir. Bu dosya, uygulamanın ana JavaScript işlevselliğini yönetmek için kullanılacaktır.
## data-sap-ui-onInit Açıklaması

`data-sap-ui-onInit="module:ui5/product/list/index"` ifadesi, `index.html` dosyasındaki `<script>` etiketi içinde kullanılır. Bu özellik, SAPUI5 uygulaması başlatılırken belirtilen modülün (`ui5/product/list/index`) yüklenmesini ve çalıştırılmasını sağlar. Böylece uygulamanın başlangıcında gerekli JavaScript kodları otomatik olarak devreye girer.


## Body Etiketine Eklenen Sınıf

`<body class="sapUiBody">` şeklinde, `body` etiketine `sapUiBody` sınıfı eklenmiştir. Bu sınıf, SAPUI5 uygulamalarında temel stil ve düzenlemelerin uygulanmasını sağlar.

```html
<!DOCTYPE html> <!-- ! yaparak html doc oluşturabilirsin -->More actions
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fiori Eğitim</title> <!-- ! title tag sayfanın başlığını belirler -->
    <!-- ! sap-ui-bootstrap, SAPUI5 kütüphanesini yükler -->
    <!-- ui5.product.list name space'sinin sağ tarafında html alanın yolu bulunmaktadır -->
    <script id="sap-ui-bootstrap" src="https://sapui5.hana.ondemand.com/resources/sap-ui-core.js"
        data-sap-ui-theme="sap_horizon" data-sap-ui-libs="sap.m" data-sap-ui-compatVersion="edge"
        data-sap-ui-async="true" data-sap-ui-resourceroots='{
            "ui5.product.list": "./"
        }' data-sap-ui-onInit="module:ui5/product/list/index"></script>
    <!-- ! sap-ui-bootstrap, SAPUI5 kütüphanesini yükler -->
</head>

<body class="sapUiBody">
<body class="sapUiBody" id ="content">


</body>

```

## index.js Dosyasına Eklenen Kod

```js
console.log("Hello, from Ui5"); Add commentMore actions
new sap.m.Button('idMyButton', {
    text: "Create new Product",
    press: () => {
        console.log("Button pressed");
    }
}).placeAt("content");
```
 satırı, `index.js` dosyasına eklenmiştir. Bu kod, uygulama başlatıldığında tarayıcı konsolunda "Hello, from Ui5" mesajının görüntülenmesini sağlar.

![Console Çıktısı](/Image/1/1.2/console.png)


---

[⏭ Sonraki Bölüm: BÖLÜM1.3](./BÖLÜM1.3%20.md)

