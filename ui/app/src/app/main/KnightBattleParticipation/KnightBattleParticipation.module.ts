import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {KNIGHTBATTLEPARTICIPATION_MODULE_DECLARATIONS, KnightBattleParticipationRoutingModule} from  './KnightBattleParticipation-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    KnightBattleParticipationRoutingModule
  ],
  declarations: KNIGHTBATTLEPARTICIPATION_MODULE_DECLARATIONS,
  exports: KNIGHTBATTLEPARTICIPATION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class KnightBattleParticipationModule { }