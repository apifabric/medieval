import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Queen-new',
  templateUrl: './Queen-new.component.html',
  styleUrls: ['./Queen-new.component.scss']
})
export class QueenNewComponent {
  @ViewChild("QueenForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}