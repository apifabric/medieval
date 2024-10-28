import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './KnightBattleParticipation-card.component.html',
  styleUrls: ['./KnightBattleParticipation-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.KnightBattleParticipation-card]': 'true'
  }
})

export class KnightBattleParticipationCardComponent {


}