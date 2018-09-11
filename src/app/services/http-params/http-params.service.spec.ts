import { TestBed, inject } from '@angular/core/testing';

import { HttpParamsService } from './http-params.service';

describe('AppHttpParamsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpParamsService]
    });
  });

  it('should be created', inject([HttpParamsService], (service: HttpParamsService) => {
    expect(service).toBeTruthy();
  }));
});
