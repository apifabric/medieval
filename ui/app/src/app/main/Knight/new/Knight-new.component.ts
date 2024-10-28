import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Knight-new',
  templateUrl: './Knight-new.component.html',
  styleUrls: ['./Knight-new.component.scss']
})
export class KnightNewComponent {
  @ViewChild("KnightForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}