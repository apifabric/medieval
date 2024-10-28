import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CastleHomeComponent } from './home/Castle-home.component';
import { CastleNewComponent } from './new/Castle-new.component';
import { CastleDetailComponent } from './detail/Castle-detail.component';

const routes: Routes = [
  {path: '', component: CastleHomeComponent},
  { path: 'new', component: CastleNewComponent },
  { path: ':id', component: CastleDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Castle-detail-permissions'
      }
    }
  }
];

export const CASTLE_MODULE_DECLARATIONS = [
    CastleHomeComponent,
    CastleNewComponent,
    CastleDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CastleRoutingModule { }