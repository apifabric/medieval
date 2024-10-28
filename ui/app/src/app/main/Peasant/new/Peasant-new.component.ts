import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Peasant-new',
  templateUrl: './Peasant-new.component.html',
  styleUrls: ['./Peasant-new.component.scss']
})
export class PeasantNewComponent {
  @ViewChild("PeasantForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}