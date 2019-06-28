import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ShopService } from './shop.service';
import { DataService } from '../data/data.service';



describe('ShopService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ ShopService, DataService ],
      imports: [ HttpClientTestingModule ]
    });
  });

  it('should be created', inject([ShopService], (service: ShopService) => {
    expect(service).toBeTruthy();
  }));
});
