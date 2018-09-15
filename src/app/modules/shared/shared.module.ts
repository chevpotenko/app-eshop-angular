import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShopListComponent } from './shop-list/shop-list.component';

@NgModule({
	declarations: [
		ShopListComponent
	],
	imports: [		
		CommonModule,
		RouterModule		
	],
	exports: [
		ShopListComponent
	]
})
export class SharedModule { }
