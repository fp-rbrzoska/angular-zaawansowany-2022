import { TestBed } from '@angular/core/testing';

import { FpTestService } from './fp-test.service';

describe('FpTestService', () => {
  let service: FpTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FpTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
