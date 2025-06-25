# 🎯 Amaç

Uygulamada buton gibi kontrollerin HTML veya JavaScript içinde değil, ayrı bir XML View dosyasında tanımlanarak MVC mimarisine uygun bir yapı kurulması.

---

## 📌 Adım Adım Yapılanlar

### 1. MVC Yapısına Geçiş Başlatılıyor

- Uygulama için XML tabanlı view dosyaları oluşturulmaya başlanır.
- SAPUI5, XML, HTML ve JavaScript View’leri destekler; **XML tavsiye edilir** çünkü okunabilirliği daha yüksektir.

### 2. Yeni View Klasörü Oluşturuluyor
![View klasörü oluşturma](/Image/2/2.2/1.View_klasoru_olusturma.png)
- Proje kök klasöründe `view` adında bir klasör oluşturulur.
- İçerisine `App.view.xml` adında bir dosya eklenir.
- `.view.xml` uzantısı zorunludur.

### 3. XML View Dosyası İçeriği

```xml
<mvc:View
    displayBlock="true"
    xmlns:mvc="sap.ui.core.mvc"
    xmlns="sap.m">
    <Button text="Create New Product"/>
</mvc:View>
```

- Ana XML etiketi `<mvc:View>` olarak tanımlanır.
- `displayBlock="true"` gibi nitelikler eklenir.
- displayBlock: Bu, genellikle bir bileşenin veya HTML öğesinin CSS display özelliğini kontrol etmek için kullanılır.
"true": Bu değer, özelliğin etkin olduğunu (yani blok olarak gösterileceğini) belirtir.

- Kullanılacak SAPUI5 kütüphaneleri (ör. `sap.m`, `sap.ui.core.mvc`) namespace olarak tanımlanır.
- İçine bir `<Button>` kontrolü yerleştirilir (örnek: `text="Create New Product"`).
- `press` olayı tanımlanır ama JavaScript controller henüz yazılmadığı için boş bırakılır.

### 4. index.js Güncelleniyor

- Önceden HTML içine yerleştirilen `<Button>` kaldırılır.
- Yerine yeni oluşturulan `App.view.xml` dosyasından bir XML View nesnesi yaratılır ve uygulamaya dahil edilir.
- `sap.ui.core.mvc.XMLView.create(...)` ile View nesnesi dinamik olarak oluşturulur.
- Oluşan View nesnesi `index.html` içindeki content alanına eklenir.

```javascript
sap.ui.core.mvc.XMLView.create({
    viewName: "view.App"
}).then(function(oView){
    oView.placeAt("content");
});
```

### 5. Uygulama Test Ediliyor

- Sayfa yüklendiğinde, artık XML view üzerinden oluşturulan buton gösterilir.
- Yapı çalışır, kodlar daha düzenli ve modüler hale gelir.

---

## 🧠 Özet Bilgi

- SAPUI5 projelerinde **XML View kullanımı önerilir**.
- MVC mimarisi kodun daha modüler, test edilebilir ve bakımı kolay olmasını sağlar.
- `index.js` dosyasında artık doğrudan UI elemanları değil, XML view üzerinden tanımlı kontroller kullanılacak.
- Bu yapı bir sonraki adımda controller (denetleyici) dosyası ile genişletilecek.