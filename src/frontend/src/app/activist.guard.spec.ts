import { TestBed } from '@angular/core/testing';

import { ActivistGuard } from './activist.guard';

describe('ActivistGuard', () => {
  let guard: ActivistGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActivistGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
