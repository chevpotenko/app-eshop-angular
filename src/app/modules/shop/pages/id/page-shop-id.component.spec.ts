import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageShopIdComponent } from './page-shop-id.component';

describe('PageShopIdComponent', () => {
  let component: PageShopIdComponent;
  let fixture: ComponentFixture<PageShopIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageShopIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageShopIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
