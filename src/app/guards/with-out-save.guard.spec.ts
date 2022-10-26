import { TestBed } from '@angular/core/testing';

import { WithOutSaveGuard } from './with-out-save.guard';

describe('WithOutSaveGuard', () => {
  let guard: WithOutSaveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WithOutSaveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
