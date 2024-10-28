import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnightBattleParticipationHomeComponent } from './home/KnightBattleParticipation-home.component';
import { KnightBattleParticipationNewComponent } from './new/KnightBattleParticipation-new.component';
import { KnightBattleParticipationDetailComponent } from './detail/KnightBattleParticipation-detail.component';

const routes: Routes = [
  {path: '', component: KnightBattleParticipationHomeComponent},
  { path: 'new', component: KnightBattleParticipationNewComponent },
  { path: ':id', component: KnightBattleParticipationDetailComponent,
    data: {
      oPermission: {
        permissionId: 'KnightBattleParticipation-detail-permissions'
      }
    }
  }
];

export const KNIGHTBATTLEPARTICIPATION_MODULE_DECLARATIONS = [
    KnightBattleParticipationHomeComponent,
    KnightBattleParticipationNewComponent,
    KnightBattleParticipationDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KnightBattleParticipationRoutingModule { }