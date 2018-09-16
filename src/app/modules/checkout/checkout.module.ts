import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { checkoutRouting } from './checkout.routing';
import { PageCheckoutComponent } from './pages/checkout/checkout.component';

@NgModule({
	imports: [
		CommonModule,
		checkoutRouting
	],
	declarations: [
		PageCheckoutComponent
	]
})
export class PageCheckoutModule { }
