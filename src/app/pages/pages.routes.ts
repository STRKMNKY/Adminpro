import { Routes, RouterModule } from '@angular/router';

import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';



const pagesRoutes: Routes = [
    {
        path: '',
          component: PagesComponent,
          children: [
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
            { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
            { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
            { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' } },
            { path: 'graphone', component: Graficas1Component, data: { titulo: 'Gráficas' } },
            { path: 'accountSettings', component: AccoutSettingsComponent, data: { titulo: 'Ajustes de Tema' } },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
          ]
    }
];
export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
