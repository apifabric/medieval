import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Queen-card.component.html',
  styleUrls: ['./Queen-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Queen-card]': 'true'
  }
})

export class QueenCardComponent {


}