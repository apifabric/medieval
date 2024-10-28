import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Village-card.component.html',
  styleUrls: ['./Village-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Village-card]': 'true'
  }
})

export class VillageCardComponent {


}