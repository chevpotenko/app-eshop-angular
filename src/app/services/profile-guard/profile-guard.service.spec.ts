import { TestBed, inject } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProfileGuardService } from '../profile-guard/profile-guard.service';
import { AuthService } from '../auth/auth.service';

describe('ProfileGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ ProfileGuardService, AuthService ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    });
  });

  it('should be created', inject([ProfileGuardService], (service: ProfileGuardService) => {
    expect(service).toBeTruthy();
  }));
});
