import { TestBed } from '@angular/core/testing';

import { JobhealthService } from './jobhealth.service';

describe('JobhealthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobhealthService = TestBed.get(JobhealthService);
    expect(service).toBeTruthy();
  });
});
