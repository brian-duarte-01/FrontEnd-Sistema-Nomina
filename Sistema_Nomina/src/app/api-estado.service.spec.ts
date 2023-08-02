import { TestBed } from '@angular/core/testing';

import { ApiEstadoService } from './api-estado.service';

describe('ApiEstadoService', () => {
  let service: ApiEstadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiEstadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
