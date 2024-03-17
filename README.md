
# Lessons Learn

## Converting app.component into a standalone component

### Turn on the standalone flag
```ts
import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterOutlet,
  ],
  standalone: true,
})
export class AppComponent {
  title = 'new-angular-project-with-sass!';
}

```

> remove any import of the app.module on other standalone components

### Update main.ts

boostrap the app for the app.component now being a standalone component.

```ts
import { AppComponent } from './app/app.component'
import { RouterModule, Routes } from '@angular/router'
import { bootstrapApplication } from '@angular/platform-browser'
import { importProvidersFrom } from '@angular/core'
import { TodoAppComponent } from './app/modules/todo-app/todo-app.component'
import { BlogPreviewCardComponent } from './app/modules/blog-preview-card/blog-preview-card.component'


const rootPath = {
  qrCode: 'qr-code' as 'qr-code',
  blogReviewCard: 'blog-review-card' as 'blog-review-card',
  home: '' as '',
}
const routes: Routes = [
  {
    path: rootPath.qrCode,
    loadChildren: () =>
      import('./app/modules/qr-cards/qr-cards-routing.module').then(
        m => m.QrCardsRoutingModule
      ),
  },
  {
    path: rootPath.blogReviewCard,
    component: BlogPreviewCardComponent,
  },
  {
    path: rootPath.home,
    component: TodoAppComponent,
  },
]
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)), // Import providers for routing, etc.
    // ...add any global providers required for the app
  ],
}).catch(err => console.error(err))

```

## How to change styles of nested child component classes
Current best solution for keeping the children encapsulation.

```scss
// In your parent component.scss
:host ::ng-deep app-child1 {
  .some-child-class {
    // Your style overrides here
  }
}
```
## How does Angular material have child nested 

They have a component that only takes in children of their own custom components with `<ng-content select="app-child1"></ng-content>`

Parent 
```html
 <div class="parent">
    <div class="child">
      <ng-content select="app-child1"></ng-content>
    </div>
    <div class="child2">
      <ng-content select="app-child2"></ng-content>
    </div>
    <div class="child3">
      <ng-content select="app-child3"></ng-content>
    </div>
  </div>
```
> children can be a normal component

Use of parent
```html
<app-parent>
  <app-child></app-child>
</app-parent>
```


## Setting up fonts locally

Have the (variable) font file on on the asset folder, and set up a @font-face pointing to that file. Then when you call the font-family it works.

```scss
@font-face {
  font-family: "Figtree";
  src: url(../assets/fonts/Figtree-VariableFont_wght.ttf) format("woff2"), url(../assets/fonts/Figtree-Italic-VariableFont_wght.ttf) format("woff2");
  font-display: swap;
}
```

## How to best handle multiple shared config files for shared components?

You can have each item be its own object so its easier to edit it. 
When you have a list of does config then use a getter array.
> elimantes the need to loop around
Have a array handle the config, and later on you can ngfor it resulting in more Dry code.

```ts
import { Component } from '@angular/core';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { QrCardComponent } from '../../shared/components/card/qr-card.component';
import { ICardConfig } from '../../core/interfaces/card-config.interface';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-qr-cards',
  templateUrl: './qr-cards.component.html',
  styleUrls: ['./qr-cards.component.scss'],
  standalone: true,
  imports: [QrCodeComponent, QrCardComponent, NgForOf],
})
export class QrCardsComponent {
  cardConfig: ICardConfig = {
    title: 'Improve your front-end skills by building projects',
    message:
      'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level',
  };
  secondCard: ICardConfig = {
    title: 'SECOND Improve your front-end skills by building projects',
    message:
      'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level',
  };
  thirdCard: ICardConfig = {
    title: 'THIRD Improve your front-end skills by building projects',
    message:
      'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level',
  };
  cards = [this.cardConfig, this.secondCard, this.thirdCard];

  /**
   * Getter solve the issue of having to remember to update the array when changing the whole array
   */
  get getterCards() {
    return [this.cardConfig, this.secondCard, this.thirdCard];
  }

  changeOrder(event: Event) {
    event.preventDefault();
    this.cards = [this.secondCard, this.thirdCard, this.cardConfig];
  }

  changeByPartsContent(event: Event) {
    event.preventDefault();
    this.secondCard.message = 'Second Message Has Change';
    this.secondCard.title = 'Second Message Has Change';

    this.secondCard = {
      message: 'Second Message Has Change',
      title: 'Second Message Has Change',
    };
  }

  /**
   * You can but the whole array needs to be updated
   * @param event
   */
  changeWholeContent(event: Event) {
    event.preventDefault();
    this.secondCard = {
      message: 'Whole object change',
      title: 'Whole object change',
    };
  }
}

```
```html
<article class="cards">
  <app-qr-code></app-qr-code>
  <app-card [cardConfig]="cardConfig"></app-card>
  <app-card *ngFor="let config of this.cards" [cardConfig]="config"></app-card>
  <button (click)="changeOrder($event)">Change content</button>
</article>
```

### Moving the order of the qr-cards when clicking on the button

#### Before
![Alt text](./readme-images/qr-code-card/before.png)

#### After
![Alt text](./readme-images/qr-code-card/after.png)


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
