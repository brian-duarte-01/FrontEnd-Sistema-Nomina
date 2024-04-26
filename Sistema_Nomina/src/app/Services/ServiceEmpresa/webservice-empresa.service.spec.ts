import { TestBed } from '@angular/core/testing';

import { WebserviceEmpresaService } from './webservice-empresa.service';

describe('WebserviceEmpresaService', () => {
  let service: WebserviceEmpresaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebserviceEmpresaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
