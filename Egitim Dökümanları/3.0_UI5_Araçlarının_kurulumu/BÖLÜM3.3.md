# UI5 Tooling ile Özel Middleware Kullanımı

[⏮ Önceki bölüm: BÖLÜM 3.2](./BÖLÜM3.2.md)

## Giriş
Bu bölümde, **UI5 Tooling** ile özel middleware kullanımını adım adım öğreneceksiniz.

## Uygulamayı Çalıştırma

Terminalde aşağıdaki komutu çalıştırarak uygulamayı başlatın:

```bash
ui5 serve
```

Tarayıcıda `http://localhost:8080` adresine giderek uygulamanın çalıştığını doğrulayın.

## Küçük Bir Değişiklik

`i18n.properties` dosyasını açın ve aşağıdaki satırı ekleyin veya değiştirin:

```
createNewProduct=Create Product
```

Sayfayı tekrar yüklemeden bu değişikliği göremezsiniz. Otomatik sayfa yenileme (live reload) için özel bir middleware ekleyeceğiz.

## Middleware Kurulumu

Sadece geliştirme ortamında kullanmak için aşağıdaki komutu çalıştırın:

```bash
npm install --save-dev ui5-middleware-livereload
```

## ui5.yaml Dosyasına Middleware Ekleme

`ui5.yaml` dosyanıza aşağıdaki bölümü ekleyin:

```yaml
server:
    customMiddleware:
        - name: ui5-middleware-livereload
            afterMiddleware: compression
            configuration:
                debug: true
                extraExts: [ "xml", "json", "properties" ]
                watchPath: webapp
```

> **Not:** `afterMiddleware` ve girintilere dikkat edin. YAML dosyalarında girintiler çok önemlidir.

## Paket Bağımlılıkları Hakkında

UI5 Tooling 2.x sürümünde, `package.json` dosyasına `ui5.dependencies` alanı eklemek gerekirdi. UI5 Tooling 3.x ve sonrasında bu artık gerekli değildir.

## Test

Uygulamayı tekrar başlatın:

```bash
ui5 serve
```

Artık dosya değişikliklerini anlık olarak görebilirsiniz. Örneğin, `createNewProduct=Create New Product` olarak değiştirip otomatik yenilendiğini gözlemleyin.

## Sonuç

Bu bölümde:

- `ui5-middleware-livereload` paketi ile live reload özelliğini entegre ettik.
- `ui5.yaml` dosyasında özel middleware yapılandırmasını gerçekleştirdik.

## Bir Sonraki Adım

Bir sonraki bölümde özel görevlerin (custom tasks) nasıl tanımlanacağını öğreneceksiniz.
[⏭ Sonraki Bölüm: BÖLÜM 3.4](./BÖLÜM3.4.md)