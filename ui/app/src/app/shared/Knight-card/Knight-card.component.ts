import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Knight-card.component.html',
  styleUrls: ['./Knight-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Knight-card]': 'true'
  }
})

export class KnightCardComponent {


}