import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { PageShopIdComponent } from './page-shop-id.component';
import { DataService } from '../../../../services/data/data.service';
import { ShopService } from '../../../../services/shop/shop.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  NgxGalleryComponent,
  NgxGalleryImageComponent,
  NgxGalleryThumbnailsComponent,
  NgxGalleryPreviewComponent,
  NgxGalleryActionComponent,
  NgxGalleryBulletsComponent, NgxGalleryArrowsComponent
} from 'ngx-gallery';

describe('PageShopIdComponent', () => {
  let component: PageShopIdComponent;
  let fixture: ComponentFixture<PageShopIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        DataService,
        ShopService
      ],
      declarations: [
        NgxGalleryComponent,
        NgxGalleryImageComponent,
        NgxGalleryThumbnailsComponent,
        NgxGalleryPreviewComponent,
        PageShopIdComponent,
        NgxGalleryActionComponent,
        NgxGalleryBulletsComponent,
        NgxGalleryArrowsComponent
      ]
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
