import { TestBed } from '@angular/core/testing';

import { WebServiceEstadoService } from './web-service-estado.service';

describe('WebServiceEstadoService', () => {
  let service: WebServiceEstadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebServiceEstadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
