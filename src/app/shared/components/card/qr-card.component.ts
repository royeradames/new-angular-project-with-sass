import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ICardConfig } from '../../../core/interfaces/card-config.interface';

@Component({
  selector: 'app-card[cardConfig]',
  templateUrl: './qr-card.component.html',
  styleUrls: ['./qr-card.component.scss'],
  standalone: true,
  imports: [NgOptimizedImage],
})
export class QrCardComponent {
  @Input() cardConfig!: ICardConfig;
}
