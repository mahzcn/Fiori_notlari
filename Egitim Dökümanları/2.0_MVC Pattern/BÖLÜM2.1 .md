[⏮ Önceki bölüm: BÖLÜM1.4](../1.0_BOOTSTRAPPING/BÖLÜM1.4%20.md)

# MVC Nedir? (Model-View-Controller)

MVC (Model-View-Controller), yazılım geliştirmede kullanılan bir mimari desendir. Uygulamanın farklı sorumluluklarını üç ana bileşene ayırır:

![MVC Tasarım Şeması](/Image/2/2.1/MVC_TASARIM.png)
---

## Model
- Uygulamanın verilerini ve iş mantığını tutar.
- Veriler üzerinde yapılan işlemler burada gerçekleşir.

## View (Görünüm)
- Kullanıcıya verileri gösterir.
- Modeldeki değişiklikleri kullanıcıya sunar.

## Controller (Denetleyici)
- Kullanıcıdan gelen istekleri alır.
- Modeli uygun şekilde günceller.
- Görünümü güncellemek için gerekli işlemleri başlatır.

---

## MVC'de Akış Sırası

1. **Kullanıcı**, arayüz (View) ile etkileşime girer.
2. **View**, isteği **Controller**'a iletir.
3. **Controller**, gerekli işlemleri yapmak için **Model**'i manipüle eder.
4. **Model** güncellenir ve değişiklikler **View**'a yansıtılır.
5. **View**, güncel verileri kullanıcıya gösterir.

---

Bu yapı, kodun daha düzenli, bakımı kolay ve geliştirilebilir olmasını sağlar.

[⏭ Sonraki Bölüm: BÖLÜM 2.2](./BÖLÜM2.2%20.md)