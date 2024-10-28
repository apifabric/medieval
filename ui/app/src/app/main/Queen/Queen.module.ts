import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {QUEEN_MODULE_DECLARATIONS, QueenRoutingModule} from  './Queen-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    QueenRoutingModule
  ],
  declarations: QUEEN_MODULE_DECLARATIONS,
  exports: QUEEN_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QueenModule { }