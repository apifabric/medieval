import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueenHomeComponent } from './home/Queen-home.component';
import { QueenNewComponent } from './new/Queen-new.component';
import { QueenDetailComponent } from './detail/Queen-detail.component';

const routes: Routes = [
  {path: '', component: QueenHomeComponent},
  { path: 'new', component: QueenNewComponent },
  { path: ':id', component: QueenDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Queen-detail-permissions'
      }
    }
  }
];

export const QUEEN_MODULE_DECLARATIONS = [
    QueenHomeComponent,
    QueenNewComponent,
    QueenDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueenRoutingModule { }