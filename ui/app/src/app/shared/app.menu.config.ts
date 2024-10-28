import { MenuRootItem } from 'ontimize-web-ngx';

import { AdvisorCardComponent } from './Advisor-card/Advisor-card.component';

import { BattleCardComponent } from './Battle-card/Battle-card.component';

import { CastleCardComponent } from './Castle-card/Castle-card.component';

import { KingCardComponent } from './King-card/King-card.component';

import { KingdomCardComponent } from './Kingdom-card/Kingdom-card.component';

import { KnightCardComponent } from './Knight-card/Knight-card.component';

import { KnightBattleParticipationCardComponent } from './KnightBattleParticipation-card/KnightBattleParticipation-card.component';

import { PeasantCardComponent } from './Peasant-card/Peasant-card.component';

import { QueenCardComponent } from './Queen-card/Queen-card.component';

import { ResourceCardComponent } from './Resource-card/Resource-card.component';

import { TradeCardComponent } from './Trade-card/Trade-card.component';

import { VillageCardComponent } from './Village-card/Village-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Advisor', name: 'ADVISOR', icon: 'view_list', route: '/main/Advisor' }
    
        ,{ id: 'Battle', name: 'BATTLE', icon: 'view_list', route: '/main/Battle' }
    
        ,{ id: 'Castle', name: 'CASTLE', icon: 'view_list', route: '/main/Castle' }
    
        ,{ id: 'King', name: 'KING', icon: 'view_list', route: '/main/King' }
    
        ,{ id: 'Kingdom', name: 'KINGDOM', icon: 'view_list', route: '/main/Kingdom' }
    
        ,{ id: 'Knight', name: 'KNIGHT', icon: 'view_list', route: '/main/Knight' }
    
        ,{ id: 'KnightBattleParticipation', name: 'KNIGHTBATTLEPARTICIPATION', icon: 'view_list', route: '/main/KnightBattleParticipation' }
    
        ,{ id: 'Peasant', name: 'PEASANT', icon: 'view_list', route: '/main/Peasant' }
    
        ,{ id: 'Queen', name: 'QUEEN', icon: 'view_list', route: '/main/Queen' }
    
        ,{ id: 'Resource', name: 'RESOURCE', icon: 'view_list', route: '/main/Resource' }
    
        ,{ id: 'Trade', name: 'TRADE', icon: 'view_list', route: '/main/Trade' }
    
        ,{ id: 'Village', name: 'VILLAGE', icon: 'view_list', route: '/main/Village' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    AdvisorCardComponent

    ,BattleCardComponent

    ,CastleCardComponent

    ,KingCardComponent

    ,KingdomCardComponent

    ,KnightCardComponent

    ,KnightBattleParticipationCardComponent

    ,PeasantCardComponent

    ,QueenCardComponent

    ,ResourceCardComponent

    ,TradeCardComponent

    ,VillageCardComponent

];