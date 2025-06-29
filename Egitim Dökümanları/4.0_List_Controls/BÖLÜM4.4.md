
# SAPUI5 - Object List Item Kontrolü Kullanımı
[⏮ Önceki bölüm: BÖLÜM 4.3](BÖLÜM4.3.md)
## Giriş
Merhaba hanımlar ve beyler, bu videoda `ObjectListItem` isimli bir kontrolü inceleyeceğiz.

Diyelim ki ürünlerimiz için daha fazla alan göstermek istiyoruz. `StandardListItem` kontrolü yeterince alan sağlamadığı için daha güçlü bir kontrol olan `ObjectListItem`'ı kullanacağız.

## Temel Özellikler

### Başlık
İlk olarak `title` özelliği mevcut. `StandardListItem`'da da vardı. Örnek olarak "Domates" diyebiliriz.

### Fiyat ve Para Birimi
- `number`: 999 (fiyat)
- `numberUnit`: TRY

Bu sayede daha büyük puntolu ve kalın yazılı bir fiyat görüntüleriz.

## Ek Özellikler

### Attributes (Nitelikler)
`attributes` bir `ObjectAttribute` türünde olmalı ve birden fazla olabilir (0..n).

Örnek:
```xml
   <Button  text="{i18n>buttonTextCreate}" press='onPressCreateNewProduct'  />
                <List 
                id="idProductList"
                class="sapUiTinyMarginTop listWithSmallerTitle" 
                headerText="{i18n>listHeader}" 
                noDataText="{i18n>noDataText}"
                mode="Delete"
                delete="onPressDeleteProduct">
                    <items>
                        <ObjectListItem 
                        title="Domates"
                        number="999"
                        numberUnit="TRY">
                        <attributes>
                            <ObjectAttribute title="Katagori" text="Sebze" />
                            <ObjectAttribute title="SKT" text="29.06.2025" />
                        </attributes>
                        <firstStatus>
                            <ObjectStatus text="Taze" state="Success" />
                        </firstStatus>
                        </ObjectListItem>
                    </items>
                </List>
```

### Durum Bilgisi (Status)
`firstStatus` özelliğini kullanarak örneğin ürünün durumu gösterilebilir.

```xml
<ObjectStatus text="Mevcut" state="Success" />
```

Durum için kullanılabilecek değerler:
- `Error`
- `Information`
- `None`
- `Success`
- `Warning`

## Yeni Ürün Oluşturma (Input Alanları)

Tüm input alanlarını `VBox` içine koyuyoruz.

### Kategori ComboBox
- ID: `idCategory`
- Placeholder: `Kategori`
- Seçenekler: Gıda, İçecekler, Elektronik

### Fiyat Input
- ID: `idPrice`
- Placeholder: `Fiyat`
- Tip: `Number`

### Tarih Seçiciler (DatePicker)
- Çıkış Tarihi ID: `idReleaseDate`
- Kullanım Dışı Tarihi ID: `idDiscontinuedDate`

## Programatik Olarak Ürün Eklemek

Controller'da butona tıklanınca input'lardan verileri alıyoruz:

```js
const oCategory = this.byId("idCategory").getSelectedItem();
const sPrice = this.byId("idPrice").getValue();
const releaseDate = this.byId("idReleaseDate").getDateValue();
const discontinuedDate = this.byId("idDiscontinuedDate").getDateValue();
```

### ObjectListItem Oluşturma

```js
new ObjectListItem({
    title: "Domates",
    number: sPrice,
    numberUnit: "TRY",
    attributes: [
        new ObjectAttribute({ title: "Kategori", text: oCategory.getText() }),
        new ObjectAttribute({ title: "SKT Tarihi", text: releaseDate })
    ],
    firstStatus: new ObjectStatus({
        text: this._getAvailabilityText(discontinuedDate),
        state: this._getAvailabilityState(discontinuedDate)
    })
});
```

### Durum Kontrolü (Mevcut / Kullanım Dışı)
```js
_getAvailabilityText(oDate) {
    return oDate > new Date() ? "Taze" : "Bozuk";
}

_getAvailabilityState(oDate) {
    return oDate > new Date() ? ValueState.Success : ValueState.Error;
}
```

## Örnek Ürün Oluşturma

1. Domates - Elektronik - 999 Euro - Taze
2. Salatalık - İçecek - 888 Euro - Bozuk
![Program](/Image/4/4.4/1.program.png)

## Sonuç

Artık ObjectListItem ile zengin içerikli liste elemanları gösterebiliyoruz. Bir sonraki videoda bu input alanlarını daha güzel bir forma dönüştüreceğiz.
---
[⏭ Sonraki Bölüm: BÖLÜM 4.5](./BÖLÜM4.5.md)

---