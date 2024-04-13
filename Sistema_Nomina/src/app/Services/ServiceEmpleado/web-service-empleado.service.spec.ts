import { TestBed } from '@angular/core/testing';

import { WebServiceEmpleadoService } from './web-service-empleado.service';

describe('WebServiceEmpleadoService', () => {
  let service: WebServiceEmpleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebServiceEmpleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
