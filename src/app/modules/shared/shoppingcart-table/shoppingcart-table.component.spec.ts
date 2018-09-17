import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingcartTableComponent } from './shoppingcart-table.component';

describe('CartTableComponent', () => {
  let component: ShoppingcartTableComponent;
  let fixture: ComponentFixture<ShoppingcartTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingcartTableComponent ]
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
