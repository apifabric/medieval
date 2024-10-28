import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'KnightBattleParticipation-new',
  templateUrl: './KnightBattleParticipation-new.component.html',
  styleUrls: ['./KnightBattleParticipation-new.component.scss']
})
export class KnightBattleParticipationNewComponent {
  @ViewChild("KnightBattleParticipationForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}