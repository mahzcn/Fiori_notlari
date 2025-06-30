# SAPUI5 - XML Fragment ve 
[⏮ Önceki bölüm: BÖLÜM 4.4](BÖLÜM4.4.md)
SimpleForm Kullanımı

## 1. XML Fragment Oluşturma
- **Amaç:** UI kodunu küçük ve yeniden kullanılabilir parçalara ayırmak.
- `view/fragments` klasörü altında `CreateProduct.fragment.xml` dosyası oluşturulur.
- `sap.ui.core.FragmentDefinition` etiketi ile fragment başlatılır.
- Form ve butonlar buraya taşınır.
- Gerekli namespace'ler (`sap.m`, `sap.ui.layout.form`) eklenir.

## 2. Fragment'ı Uygulamada Kullanma
- Ana `View`'de `<core:Fragment>` etiketi ile fragment çağrılır.
- `fragmentName` özelliği: `project.namespace.view.fragments.CreateProduct`
- Fragment içeriği ağ üzerinden ayrı yüklenir.

## 3. Fragment'ı Dialog İçinde Gösterme
- Fragment `Dialog` kontrolü ile sarmalanır.
- `title`, `contentWidth`, `beginButton`, `endButton` gibi özellikler ayarlanır.
- `sap.m.Dialog` içinde form yerleştirilir.

## 4. Dialog’u Dinamik Olarak Yükleme
- Controller'da `Fragment.load()` ile fragment yüklenir.
- Fragment `this.getView().addDependent()` ile bağımlı yapılır.
- `dialog.open()` ile gösterilir.
- Önceden yüklenmişse tekrar yüklenmez.

## 5. Dialog İşlevleri
- **Cancel Butonu:** Dialog’u kapatır (`dialog.close()`).
- **Create Butonu:** Yeni ürün ekler ve ardından dialog kapanır.

## 6. SimpleForm Kullanımı
- Görünüm iyileştirmek için `sap.ui.layout.form.SimpleForm` kullanılır.
- `form:SimpleForm layout="ResponsiveGridLayout"`
- `form:content` ile içeriği tanımlanır.
- Her satır `Label` + kontrol şeklinde oluşturulur.
- `editable="true"` ile stil düzenlenir.

## 7. Responsive Tasarım
- Boş kolonlar için: `emptySpanL="6"`, `emptySpanXL="6"`
- Label kolon genişliği: `labelSpanM="3"`, `labelSpanL="4"`
- Kolon sayısı: `columnsL="2"`, `columnsXL="2"`
- Farklı ekran boyutlarına göre düzenleme yapılır.

## 8. Gelişmiş Düzenleme
- `layoutData` ile alanların genişliği ayarlanır.
- Örnek: Para birimi alanı sadece `1-3` kolon kaplar.
- Yeni grup başlıkları `core:Title` ile eklenerek form iki kolona bölünür.

## 9. Sonuç
- Form elemanları hizalı ve düzenlidir.
- Dialog üzerinden veri giriş işlemi kullanıcı dostu hale gelir.
[⏭ Sonraki Bölüm: BÖLÜM 4.6](./BÖLÜM4.6.md)