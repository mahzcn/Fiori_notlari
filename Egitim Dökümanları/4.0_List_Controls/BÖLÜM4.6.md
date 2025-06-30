
# SAPUI5 - XML Fragment Kullanımı
[⏮ Önceki bölüm: BÖLÜM 4.5](BÖLÜM4.5.md)

## Giriş

Merhaba hanımlar ve beyler, bu videoda UI5'te **XML Fragment** kullanımını inceleyeceğiz.

XML fragment'leri sayesinde UI kodumuzu daha küçük ve yeniden kullanılabilir parçalara bölebiliriz. Bu da kodun okunabilirliğini ve yeniden kullanılabilirliğini artırır.

## Fragment Oluşturma

- `view` klasörü altında `fragments` adında yeni bir klasör oluşturun.
- İçine `CreateProduct.fragment.xml` isminde yeni bir dosya oluşturun.
- `Form` ve `Button` kontrollerini bu dosyaya taşıyın.

```xml
<core:FragmentDefinition xmlns="sap.m" xmlns:core="sap.ui.core" xmlns:layout="sap.ui.layout" xmlns:form="sap.ui.layout.form">
    <!-- Form ve buton burada yer alacak -->
</core:FragmentDefinition>
```

## Fragment Kullanımı

Ana görünümde fragment'i şu şekilde yüklüyoruz:

```xml
<core:Fragment fragmentName="ui5.productlist.view.fragments.CreateProduct" type="XML" />
```

## Fragment'i Dialog Olarak Kullanma

- Fragment içeriğini `Dialog` kontrolüyle sarmalayın.
- Dialog başlığı, genişliği ve içeriklerini ayarlayın.
- `beginButton` ve `endButton` alanlarını ekleyin.

## Buton ve Toolbar

Liste başlığına yeni ürün ekleme butonu ekleyin:

```xml
<content>
    <List headerToolbar="...">
        <Toolbar>
            <Title text="Ürün Listesi" />
            <ToolbarSpacer />
            <Button icon="sap-icon://add" press="onPressAddNewProduct" />
        </Toolbar>
    </List>
</content>
```

## Fragment'i Yükleme ve Gösterme

Controller'da fragment yüklendiğinde dialog'u göster:

```js
onPressAddNewProduct: function () {
    if (!this._createProductDialog) {
        Fragment.load({
            id: this.getView().getId(),
            name: "ui5.productlist.view.fragments.CreateProduct",
            controller: this
        }).then(function (oDialog) {
            this._createProductDialog = oDialog;
            this.getView().addDependent(oDialog);
            oDialog.open();
        }.bind(this));
    } else {
        this._createProductDialog.open();
    }
}
```

## Dialog Kapatma

```js
onCancelCreateProduct: function () {
    this._createProductDialog.close();
}
```

## Ürün Oluşturulduğunda Dialog'u Otomatik Kapatma

Yeni ürün eklendikten sonra:

```js
this._createProductDialog.close();
```

## Sonuç

Artık XML Fragment kullanarak formumuzu daha modüler hale getirdik ve bir dialog içerisinde dinamik olarak yüklemeyi başardık.

Bir sonraki videoda görüşmek üzere!
[⏭ Sonraki Bölüm: BÖLÜM 5.1](/Egitim%20Dökümanları/5.0_Data_Binding/BÖLÜM5.1.md)