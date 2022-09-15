import { TestBed } from '@angular/core/testing';

import { CheckEmployeeService } from './check-employee.service';

describe('CheckEmployeeService', () => {
  let service: CheckEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
