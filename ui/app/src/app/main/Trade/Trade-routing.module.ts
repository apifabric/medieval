import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TradeHomeComponent } from './home/Trade-home.component';
import { TradeNewComponent } from './new/Trade-new.component';
import { TradeDetailComponent } from './detail/Trade-detail.component';

const routes: Routes = [
  {path: '', component: TradeHomeComponent},
  { path: 'new', component: TradeNewComponent },
  { path: ':id', component: TradeDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Trade-detail-permissions'
      }
    }
  }
];

export const TRADE_MODULE_DECLARATIONS = [
    TradeHomeComponent,
    TradeNewComponent,
    TradeDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradeRoutingModule { }