import { TestBed, inject } from '@angular/core/testing';

import { TriangleCalculationService } from './triangle-calculation.service';

describe('TriangleCalculationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TriangleCalculationService]
    });
  });

  it('should be created', inject([TriangleCalculationService], (service: TriangleCalculationService) => {
    expect(service).toBeTruthy();
  }));
});
