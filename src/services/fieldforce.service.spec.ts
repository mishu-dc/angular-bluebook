import { TestBed, inject } from '@angular/core/testing';

import { FieldforceService } from './fieldforce.service';

describe('FieldforceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FieldforceService]
    });
  });

  it('should be created', inject([FieldforceService], (service: FieldforceService) => {
    expect(service).toBeTruthy();
  }));
});
