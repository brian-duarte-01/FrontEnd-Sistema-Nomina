import { TestBed } from '@angular/core/testing';

import { WebserviceIndemizacionService } from './webservice-indemizacion.service';

describe('WebserviceIndemizacionService', () => {
  let service: WebserviceIndemizacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebserviceIndemizacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
