import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Battle-new',
  templateUrl: './Battle-new.component.html',
  styleUrls: ['./Battle-new.component.scss']
})
export class BattleNewComponent {
  @ViewChild("BattleForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}