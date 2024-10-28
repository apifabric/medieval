import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CASTLE_MODULE_DECLARATIONS, CastleRoutingModule} from  './Castle-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    CastleRoutingModule
  ],
  declarations: CASTLE_MODULE_DECLARATIONS,
  exports: CASTLE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CastleModule { }