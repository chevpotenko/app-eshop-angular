import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule  } from '../shared/shared.module';

import { CatalogFilterComponent } from './components/catalog-filter/catalog-filter.component';
import { PageCatalogComponent } from './pages/catalog/page-catalog.component';

@NgModule({
	imports: [
		CommonModule,
		SharedModule
	],
	declarations: [
		PageCatalogComponent,
		CatalogFilterComponent
	],
	exports: [
		PageCatalogComponent
	]
})
export class CatalogModule { }
