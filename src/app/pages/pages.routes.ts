import { Routes, RouterModule } from '@angular/router';

import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';



const pagesRoutes: Routes = [
    {
        path: '',
          component: PagesComponent,
          children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent},
            { path: 'graphone', component: Graficas1Component },
            { path: 'accountSettings', component: AccoutSettingsComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
          ]
    }
];
export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
