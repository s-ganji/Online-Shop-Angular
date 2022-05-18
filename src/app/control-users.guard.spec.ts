import { TestBed } from '@angular/core/testing';

import { ControlUsersGuard } from './control-users.guard';

describe('ControlUsersGuard', () => {
  let guard: ControlUsersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ControlUsersGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
