import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ShopService } from '../../../services/shop/shop.service';
import { DataService } from '../../../services/data/data.service';

import { ShoppingcartTableComponent } from './shoppingcart-table.component';

describe('CartTableComponent', () => {

  let component: ShoppingcartTableComponent;
  let fixture: ComponentFixture<ShoppingcartTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ ShoppingcartTableComponent ],
      providers: [ ShopService, DataService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingcartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
