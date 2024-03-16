import { Component } from '@angular/core';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { QrCardComponent } from '../../shared/components/card/qr-card.component';
import { ICardConfig } from '../../core/interfaces/card-config.interface';

@Component({
  selector: 'app-qr-cards',
  templateUrl: './qr-cards.component.html',
  styleUrls: ['./qr-cards.component.scss'],
  standalone: true,
  imports: [QrCodeComponent, QrCardComponent],
})
export class QrCardsComponent {
  cardConfig: ICardConfig = {
    title: 'Improve your front-end skills by building projects',
    message:
      'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level',
  };
}
