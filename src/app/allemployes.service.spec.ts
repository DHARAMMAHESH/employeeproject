import { TestBed } from '@angular/core/testing';

import { AllemployesService } from './allemployes.service';

describe('AllemployesService', () => {
  let service: AllemployesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllemployesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
