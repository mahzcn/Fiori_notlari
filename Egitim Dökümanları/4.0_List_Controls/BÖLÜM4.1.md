# UI5 Controlllerine Giriş
[⏮ Önceki bölüm: BÖLÜM 3.4](/Egitim%20Dökümanları/3.0_UI5_Araçlarının_kurulumu/BÖLÜM3.4.md)
## Control Nedir?

Bir control, UI5’in temel yapı taşıdır.  
Ekranda gördüğümüz her şey — bir metin, giriş alanı, liste vs. — aslında bir UI5 controlüdür.  
Yani kullanıcı arayüzünde gördüğümüz her şey bir control olarak adlandırılır.

## Controllleri Nerede Bulabiliriz?

1. Tarayıcınızda **SAP UI5** araması yapın.
2. Genellikle çıkan ilk bağlantı SDK’dır. Ona tıklayın.
3. “Samples” (Örnekler) bölümüne girin.
4. Burada tüm mevcut controllleri ve demolarını görebilirsiniz.

### Örnek: Select Kontrolü

- “Select” isimli controlü bulun ve en basit örneğini inceleyin.
- Select, bir combo box’a benzer fakat içerisine yazı yazıp arama yapılamaz.
- Temel özellikleri: pasif/düzenlenebilir yapabilme.
- Örneğin tam kaynak kodunu görebilirsiniz.

## API Referansı

- “API Reference” bölümünden kontrolün detaylarına ulaşabilirsiniz.
- Örneğin, Select kontrolü `sap.m` kütüphanesindedir.

### Tüm Controlllerin Ortak Özellikleri

- **Constructor (Yapıcı Metod):**  
    Her control bir yapılandırıcıdır. JavaScript’te `new` anahtar kelimesiyle başlatılır.
- **Properties (Özellikler):**  
    Genişlik (`width`), metin (`text`), ikon (`icon`), başlık (`title`) gibi değerler.
- **Aggregations (Topluluklar):**  
    Controlün çocuklarıdır.  
    Örneğin, Select controlünde `items` adında bir aggregation vardır ve `sap.ui.core.Item` tipindedir.  
    İstediğiniz kadar item ekleyebilirsiniz.
- **Associations (İlişkiler):**  
    Controlle başka bir control iliştirebilirsiniz (ör. Select’e Label eklemek).
- **Events (Olaylar):**  
    Controlllerde `press`, `change` gibi olaylar tetiklenebilir ve fonksiyonlar bağlanabilir.
- **Methods (Metotlar):**  
    Olay bağlamak, aggregation eklemek, veri almak/ayarlamak gibi işlemler yapılabilir.

## Sınıf Hiyerarşisi

- **sap.ui.core.Control:**  
    Temel control sınıfı. Render işlemi, yükleniyor simgesi, özel CSS sınıfları sağlar.  
    - `busy` özelliği true yapılırsa yükleniyor simgesi gösterilir.
    - `visible` özelliği false yapılırsa control görünmez olur.
- **Element:**  
    Render işlemi yapamaz. Tooltip, drag-and-drop gibi işlevler sağlar.
- **ManagedObject:**  
    Property ve aggregation gibi temel kavramları sağlar.
- **EventProvider:**  
    Olayların bağlanmasını sağlar.
- **BaseObject:**  
    En üstteki kök sınıftır.

## Uygulamada Control Kullanımı

1. Uygulamayı `npm start` ile başlatın.
2. `index` dosyasını açın.
3. Uygulama büyük ekranlarda tam genişlikte ve hoş görünmüyorsa, **Shell** controlü kullanın.
     - Shell, uygulamayı ortalar.
     - İçinde bir `app` aggregation’ı vardır (tek bir control alır).
4. **App** controlü, sayfalar arası geçiş için kullanılır.
5. App’in içine bir **Page** controlü ekleyin.
     - `title` property’si ile başlık verin.
     - Page’in `content` adında bir default aggregation’ı vardır.
     - **Button** controlünü bu içeriğe ekleyin.

Uygulamanız daha derli toplu görünecektir.

## UI5 Inspector

- Chrome için **UI5 Inspector** eklentisini kullanabilirsiniz.
- HTML etiketleri yerine gerçek UI5 controlllerini görebilir, property, aggregation ve event’leri inceleyebilirsiniz.

## Kod Yapısı

```
Shell
    └── App
                └── Page
                            ├── Button
                            └── Input
                            └── List
```

Bazı aggregations default olduğu için XML’de bu etiketleri yazmasanız da olur.

## Diğer Controlller

- **Input:**  
    Yanına bir Input controlü ekleyin.  
    `placeholder`, `width`, `maxLength` gibi property’ler tanımlayın.
- **List:**  
    Altına bir List controlü ekleyin.  
    `headerText` ve `noDataText` tanımlayın.
- **StandardListItem:**  
    List’in `items` aggregation’ına üç ürün ekleyin: Ürün 1, Ürün 2, Ürün 3.

Artık uygulamanızda başlık, giriş alanı, buton ve liste görünüyor.

## Uygulama Ekran Görüntüsü

![Uygulama Ekran Görüntüsü](/Image/4/4.1/1.uygulamaSS.png)
---

Bir sonraki bölümde görüşmek üzere!
[⏭ Sonraki Bölüm: BÖLÜM 4.2](BÖLÜM4.2.md)