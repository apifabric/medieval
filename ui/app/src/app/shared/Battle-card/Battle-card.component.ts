import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Battle-card.component.html',
  styleUrls: ['./Battle-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Battle-card]': 'true'
  }
})

export class BattleCardComponent {


}