import { TestBed } from '@angular/core/testing';

import { RalliesService } from './rallies.service';

describe('RalliesService', () => {
  let service: RalliesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RalliesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
