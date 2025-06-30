
# UI5 Veri Bağlama (Data Binding) ve JSON Model Kullanımı

[⏮ Önceki bölüm: BÖLÜM 4.6](/Egitim%20Dökümanları/4.0_List_Controls/BÖLÜM4.6.md)
##  Amaç

Bu derste SAP UI5 ile **veri bağlama (data binding)** kavramına giriş yapıyoruz. Özellikle:

- JSON Model kullanımı
- Property binding (özellik bağlama)
- Varsayılan değerler belirleme
- Model sıfırlama (dialog kapandığında)

gibi konulara değinilecektir.

---

## Model Dosyasının Oluşturulması

`webapp` klasörü altında `model` adında yeni bir klasör oluşturun. İçine `models.js` dosyasını ekleyin.

```javascript
sap.ui.define([
  "sap/ui/model/json/JSONModel"
], function (JSONModel) {
  "use strict";

  return {
    createInputModel: function () {
      return new JSONModel({
        name: "",
        category: "",
        price: "",
        releaseDate: null,
        discontinuedDate: null
      });
    }
  };
});
```
## Component.js Dosyasına Model Tanımı
```javascript

sap.ui.define([
  "sap/ui/core/UIComponent",
  "ui5/productlist/model/models"
], function (UIComponent, models) {
  return UIComponent.extend("ui5.productlist.Component", {
    init: function () {
      UIComponent.prototype.init.apply(this, arguments);
      this.setModel(models.createInputModel(), "input");
    }
  });
});

```
## Property Binding (Özellik Bağlama)
```xml
<Input value="{input>/name}" />
<ComboBox selectedKey="{input>/category}" />
<Input value="{input>/price}" />
<DatePicker value="{input>/releaseDate}" />
<DatePicker value="{input>/discontinuedDate}" />
```
 Varsayılan Değerler Belirleme
```javascript
return new JSONModel({
  name: "Bread",
  category: "0",
  price: "",
  releaseDate: new Date(),
  discontinuedDate: null
});
```
## Dialog Kapanınca Modeli Sıfırlama
XML Fragment:

```xml
<Dialog afterClose=".onAfterCloseDialog">
 ```
Controller:

```javascript
onAfterCloseDialog: function () {
  const oComponent = this.getOwnerComponent();
  oComponent.setModel(models.createInputModel(), "input");
}
```
## Test
Formu doldurun ve ürünü ekleyin.

Dialog kapandığında eski veriler sıfırlanmış olacak.

Yeni ürün eklerken önceki bilgiler gelmeyecek.

## Bilmeniz Gerekenler
JSONModel küçük veri kümeleri için uygundur.

Aynı isimli model daha spesifik seviyede tanımlanmışsa o baskın gelir.

Model Component, View veya tek bir kontrol seviyesinde atanabilir.
--- 
[⏭ Sonraki Bölüm: BÖLÜM 5.2](./BÖLÜM5.2.md)
---