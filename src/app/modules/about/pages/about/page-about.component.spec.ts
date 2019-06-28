import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { PageAboutComponent } from './page-about.component';
import { DataService } from '../../../../services/data/data.service';

describe('PageAboutComponent', () => {
  let component: PageAboutComponent;
  let fixture: ComponentFixture<PageAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAboutComponent ],
      providers: [ DataService ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
