import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PageAboutComponent } from './pages/about/page-about.component';

export  const routes: Routes = [    
    { path: 'about', component: PageAboutComponent }
];
  
export  const aboutRouting: ModuleWithProviders = RouterModule.forChild(routes);