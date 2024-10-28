import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Castle-card.component.html',
  styleUrls: ['./Castle-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Castle-card]': 'true'
  }
})

export class CastleCardComponent {


}