import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KingHomeComponent } from './home/King-home.component';
import { KingNewComponent } from './new/King-new.component';
import { KingDetailComponent } from './detail/King-detail.component';

const routes: Routes = [
  {path: '', component: KingHomeComponent},
  { path: 'new', component: KingNewComponent },
  { path: ':id', component: KingDetailComponent,
    data: {
      oPermission: {
        permissionId: 'King-detail-permissions'
      }
    }
  },{
    path: ':king_id/Advisor', loadChildren: () => import('../Advisor/Advisor.module').then(m => m.AdvisorModule),
    data: {
        oPermission: {
            permissionId: 'Advisor-detail-permissions'
        }
    }
},{
    path: ':ruler_id/Kingdom', loadChildren: () => import('../Kingdom/Kingdom.module').then(m => m.KingdomModule),
    data: {
        oPermission: {
            permissionId: 'Kingdom-detail-permissions'
        }
    }
},{
    path: ':king_id/Queen', loadChildren: () => import('../Queen/Queen.module').then(m => m.QueenModule),
    data: {
        oPermission: {
            permissionId: 'Queen-detail-permissions'
        }
    }
}
];

export const KING_MODULE_DECLARATIONS = [
    KingHomeComponent,
    KingNewComponent,
    KingDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KingRoutingModule { }