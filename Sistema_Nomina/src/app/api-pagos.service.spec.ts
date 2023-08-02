import { TestBed } from '@angular/core/testing';

import { ApiPagosService } from './api-pagos.service';

describe('ApiPagosService', () => {
  let service: ApiPagosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPagosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
