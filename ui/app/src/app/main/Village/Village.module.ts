import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {VILLAGE_MODULE_DECLARATIONS, VillageRoutingModule} from  './Village-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    VillageRoutingModule
  ],
  declarations: VILLAGE_MODULE_DECLARATIONS,
  exports: VILLAGE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VillageModule { }