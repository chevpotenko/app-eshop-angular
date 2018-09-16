import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PageCheckoutComponent } from './pages/checkout/checkout.component';

export  const routes: Routes = [    
    { path: 'checkout', component: PageCheckoutComponent }
];
  
export  const checkoutRouting: ModuleWithProviders = RouterModule.forChild(routes);