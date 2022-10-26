import { TestBed } from '@angular/core/testing';

import { PermitionsGuard } from './permitions.guard';

describe('PermitionsGuard', () => {
  let guard: PermitionsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermitionsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
