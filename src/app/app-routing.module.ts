import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const rootPath = {
  qrCode: 'qr-code' as 'qr-code',
  home: '' as '',
}
const routes: Routes = [
  {
    path: rootPath.qrCode,
    loadChildren: () => import("./modules/qr-cards/qr-cards-routing.module").then((m) => m.QrCardsRoutingModule)
  },
  {
    path: rootPath.home,
    loadChildren: () => import("./modules/qr-cards/qr-cards-routing.module").then((m) => m.QrCardsRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
