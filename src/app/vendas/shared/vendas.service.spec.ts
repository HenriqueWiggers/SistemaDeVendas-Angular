import { TestBed } from '@angular/core/testing';

import { VendasService } from './vendas.service';

describe('VendasService', () => {
  let service: VendasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendasService);
  });

});
