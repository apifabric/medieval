import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Kingdom-card.component.html',
  styleUrls: ['./Kingdom-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Kingdom-card]': 'true'
  }
})

export class KingdomCardComponent {


}