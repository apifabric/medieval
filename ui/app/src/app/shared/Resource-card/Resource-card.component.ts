import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Resource-card.component.html',
  styleUrls: ['./Resource-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Resource-card]': 'true'
  }
})

export class ResourceCardComponent {


}