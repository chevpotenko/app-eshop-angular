import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DataService } from '../../../../services/data/data.service';

import { SubscriptionComponent } from './subscription.component';

describe('SubscriptionComponent', () => {
  
  let component: SubscriptionComponent;
  let fixture: ComponentFixture<SubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CommonModule, FormsModule, HttpClientTestingModule ],
      declarations: [ SubscriptionComponent ],
      providers: [ DataService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
