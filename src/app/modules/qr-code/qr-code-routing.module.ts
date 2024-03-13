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
