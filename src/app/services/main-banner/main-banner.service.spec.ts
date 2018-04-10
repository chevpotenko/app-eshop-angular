import { TestBed, inject } from '@angular/core/testing';

import { MainBannerService } from './main-banner.service';

describe('MainBannerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainBannerService]
    });
  });

  it('should be created', inject([MainBannerService], (service: MainBannerService) => {
    expect(service).toBeTruthy();
  }));
});
