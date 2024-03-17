import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPreviewCardComponent } from './modules/blog-preview-card/blog-preview-card.component';
import { TodoAppComponent } from './modules/todo-app/todo-app.component'

const rootPath = {
  qrCode: 'qr-code' as 'qr-code',
  blogReviewCard: 'blog-review-card' as 'blog-review-card',
  home: '' as '',
};
const routes: Routes = [
  // {
  //   path: rootPath.qrCode,
  //   loadChildren: () =>
  //     import('./modules/qr-cards/qr-cards-routing.module').then(
  //       m => m.QrCardsRoutingModule
  //     ),
  // },
  // {
  //   path: rootPath.blogReviewCard,
  //   component: BlogPreviewCardComponent,
  // },
  {
    path: rootPath.home,
    component: TodoAppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
