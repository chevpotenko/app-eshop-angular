import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxGalleryModule } from 'ngx-gallery';

import { SharedModule  } from '../shared/shared.module';
import { HttpParamsService } from '../.././services/http-params/http-params.service';

import { PageCatalogComponent } from './pages/catalog/page-catalog.component';
import { PageShopIdComponent } from './pages/id/page-shop-id.component';
import { CatalogFilterComponent } from './components/catalog-filter/catalog-filter.component';
import { CatalogPaginationComponent } from './components/catalog-pagination/catalog-pagination.component';
import { ProductCarouselComponent } from './components/product-carousel/product-carousel.component';

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		FormsModule,
		NgxGalleryModule
	],
	declarations: [
		PageCatalogComponent,
		PageShopIdComponent,
		CatalogFilterComponent,
		CatalogPaginationComponent,
		ProductCarouselComponent
	],
	providers: [
		HttpParamsService
	]
})
export class ShopModule { }
