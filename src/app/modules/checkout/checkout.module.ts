import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule  } from '../shared/shared.module';

import { CheckoutRouting } from './checkout.routing';
import { PageCheckoutComponent } from './pages/checkout/checkout.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        CheckoutRouting
    ],
    declarations: [
        PageCheckoutComponent
    ]
})
export class PageCheckoutModule { }
