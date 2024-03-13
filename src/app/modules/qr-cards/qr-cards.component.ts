import {Component} from '@angular/core';
import {QrCodeComponent} from "./qr-code/qr-code.component";

@Component({
  selector: 'app-qr-cards',
  templateUrl: './qr-cards.component.html',
  styleUrls: ['./qr-cards.component.scss'],
  standalone: true,
  imports: [QrCodeComponent]
})
export class QrCardsComponent {

}
