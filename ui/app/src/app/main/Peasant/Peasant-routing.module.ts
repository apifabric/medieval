import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeasantHomeComponent } from './home/Peasant-home.component';
import { PeasantNewComponent } from './new/Peasant-new.component';
import { PeasantDetailComponent } from './detail/Peasant-detail.component';

const routes: Routes = [
  {path: '', component: PeasantHomeComponent},
  { path: 'new', component: PeasantNewComponent },
  { path: ':id', component: PeasantDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Peasant-detail-permissions'
      }
    }
  }
];

export const PEASANT_MODULE_DECLARATIONS = [
    PeasantHomeComponent,
    PeasantNewComponent,
    PeasantDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeasantRoutingModule { }