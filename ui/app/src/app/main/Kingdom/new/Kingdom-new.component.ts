import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Kingdom-new',
  templateUrl: './Kingdom-new.component.html',
  styleUrls: ['./Kingdom-new.component.scss']
})
export class KingdomNewComponent {
  @ViewChild("KingdomForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}