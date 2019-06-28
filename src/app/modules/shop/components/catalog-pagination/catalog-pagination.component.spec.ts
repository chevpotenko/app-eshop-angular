import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DataService } from '../../../../services/data/data.service';
import { HttpParamsService } from '../../../../services/http-params/http-params.service';

import { CatalogPaginationComponent } from './catalog-pagination.component';

describe('CatalogPaginationComponent', () => {
  let component: CatalogPaginationComponent;
  let fixture: ComponentFixture<CatalogPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ CatalogPaginationComponent ],
      providers: [ DataService, HttpParamsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
