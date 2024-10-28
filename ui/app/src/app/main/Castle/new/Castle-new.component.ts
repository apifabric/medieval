import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Castle-new',
  templateUrl: './Castle-new.component.html',
  styleUrls: ['./Castle-new.component.scss']
})
export class CastleNewComponent {
  @ViewChild("CastleForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}