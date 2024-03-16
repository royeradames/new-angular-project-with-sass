import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPreviewCardComponent } from './shared/components/blog-preview-card/blog-preview-card.component';

const rootPath = {
  qrCode: 'qr-code' as 'qr-code',
  home: '' as '',
};
const routes: Routes = [
  {
    path: rootPath.qrCode,
    loadChildren: () =>
      import('./modules/qr-cards/qr-cards-routing.module').then(
        m => m.QrCardsRoutingModule
      ),
  },
  {
    path: rootPath.home,
    component: BlogPreviewCardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
