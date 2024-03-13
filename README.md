
# Lessons Learn

## Adding routing

### Router-outlet selector tag in the app html

```html
<router-outlet></router-outlet>
```

### Routing file

#### App routing file

```ts
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const rootPath = {
  qrCode: 'qr-code' as 'qr-code',
  home: '' as '',
}
const routes: Routes = [
  {
    path: rootPath.qrCode,
    loadChildren: () => import("./modules/qr-code/qr-code-routing.module").then((m) => m.QrCodeRoutingModule)
  },
  {
    path: rootPath.home,
    loadChildren: () => import("./modules/qr-code/qr-code-routing.module").then((m) => m.QrCodeRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

```

#### Nesting routing files
> Note that nesting children routes need to use the forChild instead of forRoot
> Only the app routing gets to use the forRoot
```ts
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {QrCodeComponent} from "./qr-code.component";

const qrCodePath = {
  qrCode: "qr-code" as "qr-code",
  home: '' as '',
}
const routes: Routes = [
  {
    path: qrCodePath.qrCode,
    component: QrCodeComponent
  },
  {
    path: qrCodePath.home,
    component: QrCodeComponent
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class QrCodeRoutingModule {
}

```

## Having the SCSS import path to be just the name file?
We need to add where the files are on the angular.json folder. We do this through the stylePreprocessorOptions and includePaths string array inside the architect > build. It can be added next to the styles array string.

### Key import
```json
"stylePreprocessorOptions": {
              "includePaths": [
                "src/styles"
              ]
            },
```

### zoom out view
```json
"architect": {
"build": {
"builder": "@angular-devkit/build-angular:browser",
"options": {
"outputPath": "dist/new-angular-project-with-sass",
"index": "src/index.html",
"main": "src/main.ts",
"polyfills": [
"zone.js"
],
"tsConfig": "tsconfig.app.json",
"inlineStyleLanguage": "scss",
"assets": [
"src/favicon.ico",
"src/assets"
],
"styles": [
"src/styles.scss"
],
"stylePreprocessorOptions": {
"includePaths": [
"src/styles"
]
},
"scripts": []
},
...
}
```
