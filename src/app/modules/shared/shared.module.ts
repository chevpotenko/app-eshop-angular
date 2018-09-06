import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../../app-routing.module';
import { ShopListComponent } from './shop-list/shop-list.component';

@NgModule({
	declarations: [
		ShopListComponent
	],
	imports: [
		AppRoutingModule,
		CommonModule
	],
	exports: [
		ShopListComponent
	]
})
export class SharedModule { }
