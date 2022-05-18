import { TestBed } from '@angular/core/testing';

import { SellerProductsGuard } from './seller-products.guard';

describe('SellerProductsGuard', () => {
  let guard: SellerProductsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SellerProductsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
