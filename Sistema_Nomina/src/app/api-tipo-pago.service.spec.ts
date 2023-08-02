import { TestBed } from '@angular/core/testing';

import { ApiTipoPagoService } from './api-tipo-pago.service';

describe('ApiTipoPagoService', () => {
  let service: ApiTipoPagoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTipoPagoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
