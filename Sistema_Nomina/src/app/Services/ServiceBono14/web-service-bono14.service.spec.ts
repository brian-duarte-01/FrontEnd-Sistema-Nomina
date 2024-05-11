import { TestBed } from '@angular/core/testing';

import { WebServiceBono14Service } from './web-service-bono14.service';

describe('WebServiceBono14Service', () => {
  let service: WebServiceBono14Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebServiceBono14Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
