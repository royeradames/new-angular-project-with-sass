import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {QrCardsComponent} from "./qr-cards.component";

const qrCodePath = {
  qrCode: "qr-code" as "qr-code",
  home: '' as '',
}
const routes: Routes = [
  {
    path: qrCodePath.qrCode,
    component: QrCardsComponent
  },
  {
    path: qrCodePath.home,
    component: QrCardsComponent
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class QrCardsRoutingModule {
}
