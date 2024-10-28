import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvisorHomeComponent } from './home/Advisor-home.component';
import { AdvisorNewComponent } from './new/Advisor-new.component';
import { AdvisorDetailComponent } from './detail/Advisor-detail.component';

const routes: Routes = [
  {path: '', component: AdvisorHomeComponent},
  { path: 'new', component: AdvisorNewComponent },
  { path: ':id', component: AdvisorDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Advisor-detail-permissions'
      }
    }
  }
];

export const ADVISOR_MODULE_DECLARATIONS = [
    AdvisorHomeComponent,
    AdvisorNewComponent,
    AdvisorDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvisorRoutingModule { }