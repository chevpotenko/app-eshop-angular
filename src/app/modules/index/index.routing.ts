
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PageIndexComponent } from './pages/index/page-index.component';

export  const routes: Routes = [    
    { path: '', component: PageIndexComponent }
];
  
export  const indexRouting: ModuleWithProviders = RouterModule.forChild(routes);