import { TestBed } from '@angular/core/testing';

import { ConsultarApiService } from './consultar-api.service';

describe('ConsultarApiService', () => {
  let service: ConsultarApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultarApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
