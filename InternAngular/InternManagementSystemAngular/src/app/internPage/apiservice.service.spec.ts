import { TestBed } from '@angular/core/testing';

import { APIserviceService } from './apiservice.service';

describe('APIserviceService', () => {
  let service: APIserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
