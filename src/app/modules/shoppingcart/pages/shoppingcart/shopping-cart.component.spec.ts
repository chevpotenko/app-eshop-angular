import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ShoppingCartComponent } from './shopping-cart.component';
import { ShoppingcartTableComponent } from '../../../shared/shoppingcart-table/shoppingcart-table.component';
import { ShopService } from '../../../../services/shop/shop.service';
import { DataService } from '../../../../services/data/data.service';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ ShopService, DataService ],
      declarations: [ ShoppingCartComponent, ShoppingcartTableComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
