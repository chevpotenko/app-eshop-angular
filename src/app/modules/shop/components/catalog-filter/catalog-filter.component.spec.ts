import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DataService } from '../../../../services/data/data.service';
import { HttpParamsService } from '../../../../services/http-params/http-params.service';

import { CatalogFilterComponent } from './catalog-filter.component';

describe('CatalogFilterComponent', () => {
  
  let component: CatalogFilterComponent;
  let fixture: ComponentFixture<CatalogFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ CatalogFilterComponent ],
      providers: [ DataService, HttpParamsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
