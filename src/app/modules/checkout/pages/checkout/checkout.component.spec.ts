import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ShopService } from '../../../../services/shop/shop.service';
import { DataService } from '../../../../services/data/data.service';

import { PageCheckoutComponent } from './checkout.component';
import { ShoppingcartTableComponent } from '../../../../modules/shared/shoppingcart-table/shoppingcart-table.component';

describe('PageCheckoutComponent', () => {
  
  let component: PageCheckoutComponent;
  let fixture: ComponentFixture<PageCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCheckoutComponent, ShoppingcartTableComponent ],
      providers: [ ShopService, DataService ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
