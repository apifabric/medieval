import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Village-new',
  templateUrl: './Village-new.component.html',
  styleUrls: ['./Village-new.component.scss']
})
export class VillageNewComponent {
  @ViewChild("VillageForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}