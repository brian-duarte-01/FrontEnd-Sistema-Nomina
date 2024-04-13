import { TestBed } from '@angular/core/testing';

import { WebServiceTipoPagoService } from './web-service-tipo-pago.service';

describe('WebServiceTipoPagoService', () => {
  let service: WebServiceTipoPagoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebServiceTipoPagoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
