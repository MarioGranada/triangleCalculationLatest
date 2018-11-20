import { TestBed, inject } from '@angular/core/testing';
import { triangleTypes } from '../shared/enums/triangle-types.enum';
import { customErrorMessages } from '../shared/enums/custom-errors-messages.enum';
import { TriangleCalculationService } from './triangle-calculation.service';

describe('TriangleCalculationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TriangleCalculationService]
    });
  });

  it('should be created', inject(
    [TriangleCalculationService],
    (service: TriangleCalculationService) => {
      expect(service).toBeTruthy();
    }
  ));

  it('should calculate an ISOSCELES triangle with two equal sides and one diferent', inject(
    [TriangleCalculationService],
    (service: TriangleCalculationService) => {
      let testSides: number[] = [20, 20, 21];
      expect(
        service.getTriangleType(testSides[0], testSides[1], testSides[2])
      ).toEqual(triangleTypes.isosceles);
    }
  ));

  it('should calculate an EQUILATERAL triangle with three equal sides', inject(
    [TriangleCalculationService],
    (service: TriangleCalculationService) => {
      let testSides: number[] = [20, 20, 20];
      expect(
        service.getTriangleType(testSides[0], testSides[1], testSides[2])
      ).toEqual(triangleTypes.equilateral);
    }
  ));

  it('should calculate a SCALENE triangle with all three different sides', inject(
    [TriangleCalculationService],
    (service: TriangleCalculationService) => {
      let testSides: number[] = [20, 21, 22];
      expect(
        service.getTriangleType(testSides[0], testSides[1], testSides[2])
      ).toEqual(triangleTypes.scalene);
    }
  ));

  it('should prompt with an error when one or several sides are equal to zero', inject(
    [TriangleCalculationService],
    (service: TriangleCalculationService) => {
      let testSides: number[] = [0, 21, 22];
      expect(
        service.getTriangleType(testSides[0], testSides[1], testSides[2])
      ).toEqual(customErrorMessages.invalidDimensionsSet);
      testSides = [20, 0, 22];
      expect(
        service.getTriangleType(testSides[0], testSides[1], testSides[2])
      ).toEqual(customErrorMessages.invalidDimensionsSet);
      testSides = [20, 21, 0];
      expect(
        service.getTriangleType(testSides[0], testSides[1], testSides[2])
      ).toEqual(customErrorMessages.invalidDimensionsSet);
      testSides = [0, 0, 21];
      expect(
        service.getTriangleType(testSides[0], testSides[1], testSides[2])
      ).toEqual(customErrorMessages.invalidDimensionsSet);
    }
  ));

  it('should prompt with an error when at least one of the sides is not a number', inject(
    [TriangleCalculationService],
    (service: TriangleCalculationService) => {
      let testSides: any[] = ['test', 21, 22];
      expect(
        service.getTriangleType(testSides[0], testSides[1], testSides[2])
      ).toEqual(customErrorMessages.invalidDimensionsSet);
      testSides = [20, 'test', 22];
      expect(
        service.getTriangleType(testSides[0], testSides[1], testSides[2])
      ).toEqual(customErrorMessages.invalidDimensionsSet);
      testSides = [20, 21, 'test'];
      expect(
        service.getTriangleType(testSides[0], testSides[1], testSides[2])
      ).toEqual(customErrorMessages.invalidDimensionsSet);
      testSides = ['test', 'test', 21];
      expect(
        service.getTriangleType(testSides[0], testSides[1], testSides[2])
      ).toEqual(customErrorMessages.invalidDimensionsSet);
    }
  ));

  it('should prompt with an error when at least one of the sides is missing', inject(
    [TriangleCalculationService],
    (service: TriangleCalculationService) => {
      let testSides: number[] = [20, 21, 22];
      // Using index at 3 to provide an 'undefined' value
      expect(
        service.getTriangleType(testSides[3], testSides[1], testSides[2])
      ).toEqual(customErrorMessages.invalidDimensionsSet);
      testSides = [20, 21, 22];
      expect(
        service.getTriangleType(testSides[0], testSides[3], testSides[2])
      ).toEqual(customErrorMessages.invalidDimensionsSet);
      testSides = [20, 21, 22];
      expect(
        service.getTriangleType(testSides[0], testSides[1], testSides[3])
      ).toEqual(customErrorMessages.invalidDimensionsSet);
      testSides = [20, 21, 21];
      expect(
        service.getTriangleType(testSides[3], testSides[3], testSides[2])
      ).toEqual(customErrorMessages.invalidDimensionsSet);
    }
  ));
});
