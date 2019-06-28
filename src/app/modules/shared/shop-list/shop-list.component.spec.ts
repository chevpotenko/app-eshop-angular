import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ShopService } from '../../../services/shop/shop.service';
import { DataService } from '../../../services/data/data.service';

import { ShopListComponent } from './shop-list.component';

describe('ShopListComponent', () => {

  let component: ShopListComponent;
  let fixture: ComponentFixture<ShopListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      declarations: [ ShopListComponent ],
      providers: [ ShopService, DataService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
