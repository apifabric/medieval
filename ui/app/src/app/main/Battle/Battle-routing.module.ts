import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BattleHomeComponent } from './home/Battle-home.component';
import { BattleNewComponent } from './new/Battle-new.component';
import { BattleDetailComponent } from './detail/Battle-detail.component';

const routes: Routes = [
  {path: '', component: BattleHomeComponent},
  { path: 'new', component: BattleNewComponent },
  { path: ':id', component: BattleDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Battle-detail-permissions'
      }
    }
  },{
    path: ':battle_id/KnightBattleParticipation', loadChildren: () => import('../KnightBattleParticipation/KnightBattleParticipation.module').then(m => m.KnightBattleParticipationModule),
    data: {
        oPermission: {
            permissionId: 'KnightBattleParticipation-detail-permissions'
        }
    }
}
];

export const BATTLE_MODULE_DECLARATIONS = [
    BattleHomeComponent,
    BattleNewComponent,
    BattleDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BattleRoutingModule { }