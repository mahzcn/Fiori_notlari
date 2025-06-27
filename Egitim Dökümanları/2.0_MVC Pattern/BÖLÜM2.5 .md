# UI5 Çok Dillilik (Internationalization) Notları

---
[⏮ Önceki bölüm: BÖLÜM 2.4](./BÖLÜM2.4%20.md)

## Giriş
UI5 uygulamalarında çok dillilik (internationalization, i18n) ile farklı dil tercihlerine sahip kullanıcılar için içerik sunabiliriz. Örneğin, "Create New Product" gibi sabit metinleri kullanıcıların tarayıcı ayarlarına göre farklı dillerde gösterebiliriz.

## 1. i18n Klasörü ve Dosyası Oluşturma
- Uygulama klasörünüzde `i18n` adında bir klasör oluşturun.
- Bu klasörün içine `i18n.properties` dosyasını ekleyin.
- `i18n` kısaltması "internationalization" kelimesinin baş ve son harfleri ile aradaki 18 harfi temsil eder.

### Örnek Anahtar-Değer
```
buttonTextCreate = Create New Product
```

## 2. Resource Model Tanımlama
`Component.js` dosyasında, `init` fonksiyonunu override ederek resource model'i tanımlarız:

```js
        init: function () {
            // base component init
            UIComponent.prototype.init.apply(this, arguments);

            // i18n model initialization (örnek config ile)
            var i18nModel = new ResourceModel({
                bundleName: "ui5.product.list.i18n.i18n"
            });
            this.setModel(i18nModel, "i18n");
        }
```

Bu model uygulama genelinde erişilebilir olur.

## 3. XML'de i18n Kullanımı
XML view'da i18n modelinden metin almak için:

```xml
text="{i18n>buttonTextCreate}"
```

Burada `i18n` model adıdır.

## 4. Controller'da i18n Kullanımı
JavaScript içinde i18n metnine erişmek için:

```js
 var oBoundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();

            MessageToast.show(oBoundle.getText("messageText"), {
                at: 'center center'
            })
```

## 5. Çoklu Dil Dosyaları
Farklı diller için yeni dosyalar oluşturabilirsiniz:
- Almanca: `i18n_de.properties`
- İngilizce: `i18n_en.properties`
- İngilizce (US): `i18n_en_US.properties`
- İngilizce (GB): `i18n_en_GB.properties`

Tarayıcı dili değiştiğinde uygun dosya otomatik seçilir.

## 6. Parametreli Metinler
Dinamik veri eklemek için `.properties` dosyasında parametre kullanılır:

```properties
messageText={0} Ürün'ü başarıyla oluşturuldu
```

JavaScript'te parametre ile kullanımı:

```js
bundle.getText("messageProductCreated", ["Salatalık"]);
```

## 7. Örnek Ekran Görüntüsü

Aşağıda, "Create New Product" butonunun ve i18n ile gelen metinlerin göründüğü bir örnek ekran yer almaktadır:

![Çok Dillilik Örneği](/Image/2/2.5/1.Salatalık.png)
## Kapanış
Bu şekilde UI5 uygulamanızda çok dillilik desteği sağlayabilirsiniz.

[⏭ Sonraki Bölüm: BÖLÜM 2.6](./BÖLÜM2.6%20.md)
