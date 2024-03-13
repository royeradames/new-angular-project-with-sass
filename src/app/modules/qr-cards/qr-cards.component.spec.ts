import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrCardsComponent } from './qr-cards.component';

describe('QrCardsComponent', () => {
  let component: QrCardsComponent;
  let fixture: ComponentFixture<QrCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
