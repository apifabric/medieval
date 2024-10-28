import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnightHomeComponent } from './home/Knight-home.component';
import { KnightNewComponent } from './new/Knight-new.component';
import { KnightDetailComponent } from './detail/Knight-detail.component';

const routes: Routes = [
  {path: '', component: KnightHomeComponent},
  { path: 'new', component: KnightNewComponent },
  { path: ':id', component: KnightDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Knight-detail-permissions'
      }
    }
  },{
    path: ':knight_id/KnightBattleParticipation', loadChildren: () => import('../KnightBattleParticipation/KnightBattleParticipation.module').then(m => m.KnightBattleParticipationModule),
    data: {
        oPermission: {
            permissionId: 'KnightBattleParticipation-detail-permissions'
        }
    }
}
];

export const KNIGHT_MODULE_DECLARATIONS = [
    KnightHomeComponent,
    KnightNewComponent,
    KnightDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KnightRoutingModule { }