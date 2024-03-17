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
