# Controller
[⏮ Önceki bölüm: BÖLÜM 2.2](./BÖLÜM2.2%20.md)
SAPUI5 uygulamasında Controller (Denetleyici) dosyasının oluşturulması ve kullanımı.

### Controller Neden Gerekli?
- View (görünüm), sadece veri göstermek için kullanılır.
- Kullanıcı etkileşimi (örneğin butona tıklama) gerektiğinde controller gerekir.

### Controller Dosyası Oluşturma
- Yeni klasör adı: `controller`
- Yeni dosya: `App.controller.js`  
(Dosya adı serbest ama `controller.js` ile bitmeli)

![Controller](/Image/2/2.3/1.Controller.png)


### Controller Yapısı
- `sap.ui.define` ile modül tanımı yapılır.
- `sap/ui/core/mvc/Controller` sınıfı extend edilir.
- Örnek controller adı:  
    `ui5.product.list.controller.App`

### Butona Basıldığında Mesaj Gösterme (Event Handler)
- Fonksiyon adı: `onPressCreateNewProduct`
- `sap/m/MessageToast` kullanılarak mesaj gösterilir:

```js
    return Controller.extend('ui5.product.controller.App', {
        onPressCreateNewProduct: function() {
            MessageToast.show('Create New Product button pressed', {
                at: 'center top'
            });
        }
    });
```

### View Dosyasına Controller Bağlama
- `controllerName` özelliği eklenir:

```xml
controllerName="ui5.product.list.controller.App"
```

- Butonun `press` event’ine `press='onPressCreateNewProduct'` atanır:

```xml

    <Button text="Create new product" press='onPressCreateNewProduct'/>
```

### Test Sonucu
- Butona tıklandığında ekranın üst-orta kısmında mesaj çıkıyor.

---
![Finish](/Image/2/2.3/2.Finish.png)
##  Sonuç
 SAPUI5 uygulamasında bir controller nasıl oluşturulur, view ile nasıl bağlanır ve bir kullanıcı etkileşimi (butona basma işlemi ) nasıl işlenir örnekle anlatıldı
[⏭ Sonraki Bölüm: BÖLÜM 2.4](./BÖLÜM2.4%20.md)