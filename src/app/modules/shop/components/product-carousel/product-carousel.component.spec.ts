import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DataService } from '../../../../services/data/data.service'

import { ProductCarouselComponent } from './product-carousel.component';

describe('ProductCarouselComponent', () => {
  let component: ProductCarouselComponent;
  let fixture: ComponentFixture<ProductCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ ProductCarouselComponent ],
      providers: [ DataService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
