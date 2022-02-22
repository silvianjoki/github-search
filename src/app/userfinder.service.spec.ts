import { TestBed } from '@angular/core/testing';

import { UserfinderService } from './userfinder.service';

describe('UserfinderService', () => {
  let service: UserfinderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserfinderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
