import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {BATTLE_MODULE_DECLARATIONS, BattleRoutingModule} from  './Battle-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    BattleRoutingModule
  ],
  declarations: BATTLE_MODULE_DECLARATIONS,
  exports: BATTLE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BattleModule { }