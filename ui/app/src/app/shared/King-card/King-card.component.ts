import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './King-card.component.html',
  styleUrls: ['./King-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.King-card]': 'true'
  }
})

export class KingCardComponent {


}