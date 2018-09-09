import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule  } from '../shared/shared.module';

import { PageCatalogComponent } from './pages/catalog/page-catalog.component';
import { CatalogFilterComponent } from './components/catalog-filter/catalog-filter.component';
import { CatalogPaginationComponent } from './components/catalog-pagination/catalog-pagination.component';

@NgModule({
	imports: [
		CommonModule,
		SharedModule
	],
	declarations: [
		PageCatalogComponent,
		CatalogFilterComponent,
		CatalogPaginationComponent
	]
})
export class ShopModule { }
