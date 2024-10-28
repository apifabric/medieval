import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Advisor-card.component.html',
  styleUrls: ['./Advisor-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Advisor-card]': 'true'
  }
})

export class AdvisorCardComponent {


}