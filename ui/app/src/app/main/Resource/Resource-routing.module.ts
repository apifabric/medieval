import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourceHomeComponent } from './home/Resource-home.component';
import { ResourceNewComponent } from './new/Resource-new.component';
import { ResourceDetailComponent } from './detail/Resource-detail.component';

const routes: Routes = [
  {path: '', component: ResourceHomeComponent},
  { path: 'new', component: ResourceNewComponent },
  { path: ':id', component: ResourceDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Resource-detail-permissions'
      }
    }
  }
];

export const RESOURCE_MODULE_DECLARATIONS = [
    ResourceHomeComponent,
    ResourceNewComponent,
    ResourceDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourceRoutingModule { }