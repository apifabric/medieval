import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Trade-card.component.html',
  styleUrls: ['./Trade-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Trade-card]': 'true'
  }
})

export class TradeCardComponent {


}