import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {RESOURCE_MODULE_DECLARATIONS, ResourceRoutingModule} from  './Resource-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ResourceRoutingModule
  ],
  declarations: RESOURCE_MODULE_DECLARATIONS,
  exports: RESOURCE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ResourceModule { }