import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DataService } from '../../../../services/data/data.service';
import { ShopService } from '../../../../services/shop/shop.service';

import { PageIndexComponent } from './page-index.component';
import { MainBannerComponent } from '../../components/main-banner/main-banner.component';
import { SubscriptionComponent  } from '../../components/subscription/subscription.component';
import { ShopListComponent } from '../../../shared/shop-list/shop-list.component';
import { BrandsComponent } from '../../components/brands/brands.component';
import { AdviceComponent } from '../../components/advice/advice.component';
import { ArticlesComponent } from '../../components/articles/articles.component';

describe('PageIndexComponent', () => {

  let component: PageIndexComponent;
  let fixture: ComponentFixture<PageIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule, HttpClientTestingModule ],
      declarations: [ PageIndexComponent, MainBannerComponent, SubscriptionComponent, ShopListComponent, BrandsComponent, AdviceComponent, ArticlesComponent ],
      providers: [ DataService, ShopService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
