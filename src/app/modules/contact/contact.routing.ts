import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PageContactComponent } from './pages/contact/page-contact.component';

export  const routes: Routes = [    
    { path: 'contact', component: PageContactComponent }
];
  
export  const contactRouting: ModuleWithProviders = RouterModule.forChild(routes);