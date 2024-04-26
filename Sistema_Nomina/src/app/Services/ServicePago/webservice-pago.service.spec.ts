import { TestBed } from '@angular/core/testing';

import { WebservicePagoService } from './webservice-pago.service';

describe('WebservicePagoService', () => {
  let service: WebservicePagoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebservicePagoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
