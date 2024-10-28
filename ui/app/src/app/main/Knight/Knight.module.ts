import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {KNIGHT_MODULE_DECLARATIONS, KnightRoutingModule} from  './Knight-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    KnightRoutingModule
  ],
  declarations: KNIGHT_MODULE_DECLARATIONS,
  exports: KNIGHT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class KnightModule { }