# The F2E 2023 - Mission 1 立委競選官網 [連結](https://2023.thef2e.com/news)

![](readme-imgs/README_2023-11-11-19-48-54.png)

# 作品說明

## UI 設計作品

The F2E 2023 - Mission 1 立委競選官網

喵立翰 Miao Li-Han 台灣的明天 喵先鋪路

- 作者：jhen
- 連結：https://2023.thef2e.com/users/12061579704041679194

# 系統說明

專案安裝

```
npm i
```

專案啟動

```
npm start
```

專案打包

```
npm run build:prod
```

圖片 png 轉 webp

mac 安裝[參考連結](https://imagemagick.org/script/download.php)

```bash
brew install imagemagick
brew install ghostscript
```

執行圖片轉檔

```
npm run image:webp
```

# Node.js 版本

v 16.16.0

# 資料夾說明

```
├── src
│   ├── app
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── core                                        // 共用的 Angular 元件、Typescript 物件
│   │   │   └── enums
│   │   ├── layout                                      // 外層layout
│   │   │   ├── footer
│   │   │   └── header
│   │   ├── pages                                       // 頁面
│   │   │   └── landing-page
│   │   │       ├── landing-page.component.html
│   │   │       ├── landing-page.component.ts
│   │   │       ├── main
│   │   │       ├── advocate
│   │   │       ├── lastest-event
│   │   │       ├── policy-issue
│   │   │       └── other
│   │   └── shared                                      // 共用的樣式元件
│   │       ├── button.component.ts
│   │       ├── chip.component.ts
│   │       ├── dialogs
│   │       │   ├── contact-us
│   │       │   │   ├── contact-us.component.html
│   │       │   │   └── contact-us.component.ts
│   │       │   ├── dialog
│   │       │   │   ├── dialog.component.html
│   │       │   │   └── dialog.component.ts
│   │       │   ├── donate
│   │       │   │   ├── donate.component.html
│   │       │   │   └── donate.component.ts
│   │       │   └── post
│   │       │       ├── post.component.html
│   │       │       └── post.component.ts
│   │       ├── form-error.component.ts
│   │       ├── icon.component.ts
│   │       ├── loading.component.ts
│   │       └── title.component.ts
│   ├── assets
│   │   ├── fonts                                       // 字型檔
│   │   ├── icons                                       // icon
│   │   ├── images
│   │   │   ├── png                                     // png 圖片檔
│   │   │   └── webp                                    // webp 圖片檔
│   │   └── lottie                                      // Lottie 動畫檔
│   ├── index.html
│   ├── styles
│   │   ├── _base.scss                                  // 預設樣式
│   │   ├── _color.scss                                 // 顏色樣式
│   │   ├── _font.scss                                  // 文字樣式
│   │   └── _swiper-custom.scss                         // 客製化 Swiper 樣式
│   └── styles.scss
├── angular.json
├── ngsw-config.json
├── package-lock.json
├── package.json
└── tailwind.config.js
```

# 使用技術

- Angular
  - Stanealone
  - Material cdk
  - Reactive Form
  - Angular Universal(SSG)
- CSS
  - TailwindCSS
  - RWD
- 其他
  - Lottie
  - AOS.js
  - Swiper
  - Imagemagick
  - Service Worker
