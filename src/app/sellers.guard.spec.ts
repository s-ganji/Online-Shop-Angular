import { TestBed } from '@angular/core/testing';

import { SellersGuard } from './sellers.guard';

describe('SellersGuard', () => {
  let guard: SellersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SellersGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
