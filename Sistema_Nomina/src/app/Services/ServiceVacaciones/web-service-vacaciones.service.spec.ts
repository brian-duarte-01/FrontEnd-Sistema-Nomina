import { TestBed } from '@angular/core/testing';

import { WebServiceVacacionesService } from './web-service-vacaciones.service';

describe('WebServiceVacacionesService', () => {
  let service: WebServiceVacacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebServiceVacacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
