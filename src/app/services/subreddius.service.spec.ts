import { TestBed } from '@angular/core/testing';

import { SubreddiusService } from './subreddius.service';

describe('SubreddiusService', () => {
  let service: SubreddiusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubreddiusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
