import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Peasant-card.component.html',
  styleUrls: ['./Peasant-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Peasant-card]': 'true'
  }
})

export class PeasantCardComponent {


}