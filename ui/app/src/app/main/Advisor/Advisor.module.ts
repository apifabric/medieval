import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ADVISOR_MODULE_DECLARATIONS, AdvisorRoutingModule} from  './Advisor-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    AdvisorRoutingModule
  ],
  declarations: ADVISOR_MODULE_DECLARATIONS,
  exports: ADVISOR_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdvisorModule { }