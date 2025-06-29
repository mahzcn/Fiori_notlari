# UI5 Tooling ile Özel Build Görevi (Custom Task) Oluşturma
[⏮ Önceki bölüm: BÖLÜM 3.3](./BÖLÜM3.3.md)
##  Klasör Yapısı

Proje kök dizininde aşağıdaki gibi bir yapı oluşturun:

```
/your-project
└── lib
    └── tasks
        └── transpile-babel.js
```

##  Babel ve Gerekli Eklentilerin Kurulumu

Terminalde aşağıdaki komutla Babel bağımlılıklarını kurun:

```bash
npm install --save-dev @babel/core \
  @babel/plugin-proposal-object-rest-spread \
  @babel/plugin-transform-destructuring \
  @babel/plugin-transform-spread \
  @babel/preset-env
```

### package.json Güncellemeleri

ES6 import/export desteği için `package.json` dosyanıza şunu ekleyin:

```json
"type": "module"
```

Script alanına ise:

```json
"scripts": {
  "start": "ui5 serve -o",
  "build": "ui5 build"
}
```

##  transpile-babel.js İçeriği

`lib/tasks/transpile-babel.js` dosyasına aşağıdaki kodu ekleyin:

```js
import babel from '@babel/core';
import { use } from 'react';

export default async function ({workspace, log}) {
    return workspace.byGlob(['**/*.js', '**/*qunit.js']).then(resources => {
        return Promise.all(
            resources.map(resource => {
                return resource
                    .getString()
                    .then(value => {
                        log.info(`Transpiling File ${resource.getPath()}`);
                        return babel.transformAsync(value, {
                            sourceMaps: false,
                            presets: ['@babel/preset-env'],
                            plugins: [
                                [
                                    "@babel/plugin-proposal-object-rest-spread",
                                    { loose: true, useBuiltIns: true }
                                ],
                                [
                                    "@babel/plugin-transform-destructuring",
                                    { loose: true, useBuiltIns: true }
                                ],
                                [
                                    "@babel/plugin-transform-spread",
                                    { loose: true }
                                ]
                            ]
                        }).then(result => {
                            resource.setString(result.code)
                            return workspace.write(resource)
                        })
                    })
            })
        )
    })
}



// Opsiyonel: Gerekli bağımlılıkları sınırlandırmak için
export function determineRequiredDependencies() {
  return new Set(); // Hiçbir kütüphane gerekmediğini belirtir
}
```

##  ui5.yaml Yapılandırması

`ui5.yaml` dosyasının en altına şunu ekleyin:

```yaml
builder:
  customTasks:
    - name: transpile-babel
      beforeTask: generateComponentPreload
      configuration:
        # Opsiyonel yapılandırmalar
```

Ayrıca, özel görev tanımı için:

```yaml
---
specVersion: '3.0'
kind: extension
type: task
metadata:
  name: transpile-babel
task:
  path: lib/tasks/transpile-babel.js
```

> **Not:** YAML girintilerine dikkat edin.

##  Test Etme

Derleme işlemini başlatmak için:

```bash
npm run build
```

Başarılıysa, `transpiling file: ...` şeklinde loglar göreceksiniz.

##  ES6 Kod Kullanımı Örneği

Projeye aşağıdaki gibi bir ES6 kodu ekleyin:

```js
const message = 'Hello!';
const sayHello = () => console.log(message);
```

Babel bu kodu eski tarayıcılarla uyumlu hale getirecektir.

##  Ekstra Bilgi

UI5 Tooling v3 ile özel görevlerde kullanılacak bağımlılıkları belirlemek için `determineRequiredDependencies` fonksiyonu eklenebilir:

```js
export function determineRequiredDependencies() {
  return new Set(['lib']); // Sadece 'lib' klasörü bağımlı
}
```

Hiçbir şey eklemezseniz, varsayılan olarak tüm bağımlılıklar dışlanır.

## Sonuç

Bu adımlarla UI5 Tooling için özel bir build görevi oluşturabilir ve ES6 kodunuzu eski tarayıcılarla uyumlu hale getirebilirsiniz.
[⏭ Sonraki Bölüm: BÖLÜM 4.1](/Egitim%20Dökümanları/4.0_List_Controls/BÖLÜM4.1.md)