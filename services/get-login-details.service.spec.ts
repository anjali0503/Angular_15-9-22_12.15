import { TestBed } from '@angular/core/testing';

import { GetLoginDetailsService } from './get-login-details.service';

describe('GetLoginDetailsService', () => {
  let service: GetLoginDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetLoginDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
