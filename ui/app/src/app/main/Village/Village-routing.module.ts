import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VillageHomeComponent } from './home/Village-home.component';
import { VillageNewComponent } from './new/Village-new.component';
import { VillageDetailComponent } from './detail/Village-detail.component';

const routes: Routes = [
  {path: '', component: VillageHomeComponent},
  { path: 'new', component: VillageNewComponent },
  { path: ':id', component: VillageDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Village-detail-permissions'
      }
    }
  }
];

export const VILLAGE_MODULE_DECLARATIONS = [
    VillageHomeComponent,
    VillageNewComponent,
    VillageDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillageRoutingModule { }