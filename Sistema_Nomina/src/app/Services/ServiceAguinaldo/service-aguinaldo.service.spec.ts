import { TestBed } from '@angular/core/testing';

import { ServiceAguinaldoService } from './service-aguinaldo.service';

describe('ServiceAguinaldoService', () => {
  let service: ServiceAguinaldoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAguinaldoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
