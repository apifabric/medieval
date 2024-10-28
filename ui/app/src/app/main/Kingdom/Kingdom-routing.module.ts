import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KingdomHomeComponent } from './home/Kingdom-home.component';
import { KingdomNewComponent } from './new/Kingdom-new.component';
import { KingdomDetailComponent } from './detail/Kingdom-detail.component';

const routes: Routes = [
  {path: '', component: KingdomHomeComponent},
  { path: 'new', component: KingdomNewComponent },
  { path: ':id', component: KingdomDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Kingdom-detail-permissions'
      }
    }
  },{
    path: ':kingdom_id/Castle', loadChildren: () => import('../Castle/Castle.module').then(m => m.CastleModule),
    data: {
        oPermission: {
            permissionId: 'Castle-detail-permissions'
        }
    }
},{
    path: ':kingdom_id/Knight', loadChildren: () => import('../Knight/Knight.module').then(m => m.KnightModule),
    data: {
        oPermission: {
            permissionId: 'Knight-detail-permissions'
        }
    }
},{
    path: ':kingdom_id/Peasant', loadChildren: () => import('../Peasant/Peasant.module').then(m => m.PeasantModule),
    data: {
        oPermission: {
            permissionId: 'Peasant-detail-permissions'
        }
    }
},{
    path: ':kingdom_id/Resource', loadChildren: () => import('../Resource/Resource.module').then(m => m.ResourceModule),
    data: {
        oPermission: {
            permissionId: 'Resource-detail-permissions'
        }
    }
},{
    path: ':kingdom_a_id/Trade', loadChildren: () => import('../Trade/Trade.module').then(m => m.TradeModule),
    data: {
        oPermission: {
            permissionId: 'Trade-detail-permissions'
        }
    }
},{
    path: ':kingdom_b_id/Trade', loadChildren: () => import('../Trade/Trade.module').then(m => m.TradeModule),
    data: {
        oPermission: {
            permissionId: 'Trade-detail-permissions'
        }
    }
},{
    path: ':kingdom_id/Village', loadChildren: () => import('../Village/Village.module').then(m => m.VillageModule),
    data: {
        oPermission: {
            permissionId: 'Village-detail-permissions'
        }
    }
}
];

export const KINGDOM_MODULE_DECLARATIONS = [
    KingdomHomeComponent,
    KingdomNewComponent,
    KingdomDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KingdomRoutingModule { }