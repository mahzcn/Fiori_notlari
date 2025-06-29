
# UI5: Button Press ve List Delete Olayları

[⏮ Önceki bölüm: BÖLÜM 4.2](BÖLÜM4.2.md)
## Ürün Ekleme (Button Press Event)

### Amaç
Kullanıcı, butona bastığında input alanındaki ürün adını listeye ekleyecek.

### Gerekli Adımlar

#### 1. Giriş ve Liste Elemanlarına ID Ver
```xml
<Input id="productName"/>
<List id="productList"/>
```

#### 2. Buton Olayı: `onPressCreateNewProduct`
```javascript
        onPressCreateNewProduct() {

            // Get the product name from the input field
            const sProductNAme = this.getView().byId("idProductName").getValue();

            // Add new item to the list
            this.getView().byId("idProductList").addItem(
                new StandardListItem({
                    title: sProductNAme,
                    type: "Active",
                    press: "onPressProduct"
                })
            );
    }
```

#### 3. `StandardListItem` modülünü tanıtmayı unutma
```javascript
sap/m/StandardListItem
```

```javascript
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/StandardListItem",
], function(Controller , StandardListItem)
```

#### 4. Örnek Kullanım
- Girişe: `Domates`
- Butona bas → Listeye eklenir

---
![Domates ürününün eklenmesi](/Image/4/4.3/1.Domates_ürünün_eklenmesi.png)
## Ürün Silme (List Delete Event)

### Amaç
Kullanıcı, listedeki bir öğenin yanındaki sil butonuna basınca o öğe listeden silinecek.

### Gerekli Adımlar

#### 1. Listeye `mode="Delete"` özelliği ekle
```xml
<List id="productList" mode="Delete" delete="onPressDelete"/>
```
![SilmeButtonu](/Image/4/4.3/2.Silme_buttonun%20eklenmesi.png)
#### 2. Silme Olayı: `onPressDelete`
```javascript
onPressDelete: function (oEvent) {
    const oItem = oEvent.getParameter("listItem");
    this.getView().byId("productList").removeItem(oItem);
}
```


#### 3. API İncelemesi
- `delete` olayı aslında `sap.m.ListBase` sınıfından gelir.
- Parametre: `listItem`

#### 4. Test Senaryosu
- Yeni ürün ekle → Listeye gelir
- Sil butonuna bas → Öğeyi kaldırır
- Tüm öğeler silinince, "Henüz ürün eklenmedi" mesajı gösterilir

---

## No Data Mesajı

Liste boş olduğunda gösterilecek mesaj:
```xml
<List noDataText="Ürün bulunmamaktadır"/>
```

Varsayılan: "No data"

---

## Özet

- `onPressCreateNewProduct` ile kullanıcıdan veri alınır ve listeye eklenir.
- `onPressDelete` ile kullanıcı listedeki öğeleri silebilir.
- Liste boş kalınca kullanıcıya uygun bilgi mesajı gösterilir.
---
[⏭ Sonraki Bölüm: BÖLÜM 4.4](BÖLÜM4.4.md)

---
