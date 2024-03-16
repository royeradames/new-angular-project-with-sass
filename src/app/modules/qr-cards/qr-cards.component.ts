import { Component } from '@angular/core';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { QrCardComponent } from '../../shared/components/card/qr-card.component';
import { ICardConfig } from '../../core/interfaces/card-config.interface';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-qr-cards',
  templateUrl: './qr-cards.component.html',
  styleUrls: ['./qr-cards.component.scss'],
  standalone: true,
  imports: [QrCodeComponent, QrCardComponent, NgForOf],
})
export class QrCardsComponent {
  cardConfig: ICardConfig = {
    title: 'Improve your front-end skills by building projects',
    message:
      'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level',
  };
  secondCard: ICardConfig = {
    title: 'SECOND Improve your front-end skills by building projects',
    message:
      'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level',
  };
  thirdCard: ICardConfig = {
    title: 'THIRD Improve your front-end skills by building projects',
    message:
      'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level',
  };
  cards = [this.cardConfig, this.secondCard, this.thirdCard];

  /**
   * Getter solve the issue of having to remember to update the array when changing the whole array
   */
  get getterCards() {
    return [this.cardConfig, this.secondCard, this.thirdCard];
  }

  changeOrder(event: Event) {
    event.preventDefault();
    this.cards = [this.secondCard, this.thirdCard, this.cardConfig];
  }

  changeByPartsContent(event: Event) {
    event.preventDefault();
    this.secondCard.message = 'Second Message Has Change';
    this.secondCard.title = 'Second Message Has Change';

    this.secondCard = {
      message: 'Second Message Has Change',
      title: 'Second Message Has Change',
    };
  }

  /**
   * You can but the whole array needs to be updated
   * @param event
   */
  changeWholeContent(event: Event) {
    event.preventDefault();
    this.secondCard = {
      message: 'Whole object change',
      title: 'Whole object change',
    };
  }
}
