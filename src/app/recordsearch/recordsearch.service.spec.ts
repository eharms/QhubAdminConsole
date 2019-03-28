import { TestBed } from '@angular/core/testing';

import { RecordsearchService } from './recordsearch.service';

describe('RecordsearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecordsearchService = TestBed.get(RecordsearchService);
    expect(service).toBeTruthy();
  });
});
