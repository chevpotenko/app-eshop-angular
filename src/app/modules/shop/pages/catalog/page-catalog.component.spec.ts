import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DataService } from '../../../../services/data/data.service';
import { ShopService } from '../../../../services/shop/shop.service';
import { HttpParamsService } from '../../../../services/http-params/http-params.service';

import { PageCatalogComponent } from './page-catalog.component';
import { CatalogFilterComponent } from '../../components/catalog-filter/catalog-filter.component';
import { CatalogPaginationComponent } from '../../components/catalog-pagination/catalog-pagination.component';
import { ShopListComponent } from '../../../shared/shop-list/shop-list.component';

describe('PageCatalogComponent', () => {

  let component: PageCatalogComponent;
  let fixture: ComponentFixture<PageCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      declarations: [ PageCatalogComponent, CatalogFilterComponent, CatalogPaginationComponent, ShopListComponent ],
      providers: [ DataService, HttpParamsService, ShopService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
