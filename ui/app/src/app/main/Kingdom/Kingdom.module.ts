import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {KINGDOM_MODULE_DECLARATIONS, KingdomRoutingModule} from  './Kingdom-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    KingdomRoutingModule
  ],
  declarations: KINGDOM_MODULE_DECLARATIONS,
  exports: KINGDOM_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class KingdomModule { }