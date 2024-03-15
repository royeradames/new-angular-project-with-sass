import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

export interface ICardInput {
  title: string
  message: string;
}
@Component({
  selector: 'app-card[cardConfig]',
  templateUrl: './qr-card.component.html',
  styleUrls: ['./qr-card.component.scss'],
  standalone: true,
  imports: [
    NgOptimizedImage
  ]
})
export class QrCardComponent {
  @Input() cardConfig!: ICardInput;
}
