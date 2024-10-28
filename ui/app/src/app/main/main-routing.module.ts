import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Advisor', loadChildren: () => import('./Advisor/Advisor.module').then(m => m.AdvisorModule) },
    
        { path: 'Battle', loadChildren: () => import('./Battle/Battle.module').then(m => m.BattleModule) },
    
        { path: 'Castle', loadChildren: () => import('./Castle/Castle.module').then(m => m.CastleModule) },
    
        { path: 'King', loadChildren: () => import('./King/King.module').then(m => m.KingModule) },
    
        { path: 'Kingdom', loadChildren: () => import('./Kingdom/Kingdom.module').then(m => m.KingdomModule) },
    
        { path: 'Knight', loadChildren: () => import('./Knight/Knight.module').then(m => m.KnightModule) },
    
        { path: 'KnightBattleParticipation', loadChildren: () => import('./KnightBattleParticipation/KnightBattleParticipation.module').then(m => m.KnightBattleParticipationModule) },
    
        { path: 'Peasant', loadChildren: () => import('./Peasant/Peasant.module').then(m => m.PeasantModule) },
    
        { path: 'Queen', loadChildren: () => import('./Queen/Queen.module').then(m => m.QueenModule) },
    
        { path: 'Resource', loadChildren: () => import('./Resource/Resource.module').then(m => m.ResourceModule) },
    
        { path: 'Trade', loadChildren: () => import('./Trade/Trade.module').then(m => m.TradeModule) },
    
        { path: 'Village', loadChildren: () => import('./Village/Village.module').then(m => m.VillageModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }