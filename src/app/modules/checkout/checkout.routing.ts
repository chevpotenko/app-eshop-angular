import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageCheckoutComponent } from './pages/checkout/checkout.component';

const routes: Routes = [
    { path: '', component: PageCheckoutComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export  class CheckoutRouting {}
