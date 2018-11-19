import { Injectable } from '@angular/core';
import { triangleTypes } from '../shared/enums/triangle-types.enum';
import { customErrorMessages } from '../shared/enums/custom-errors-messages.enum';

@Injectable()
export class TriangleCalculationService {
  constructor() {}

  private triangleType(sideA: number, sideB: number, sideC: number): string {
    let triangleType: string = '';

    switch (true) {
      case sideA === sideB && sideB === sideC:
        triangleType = triangleTypes.equilateral;
        break;
      case sideA === sideB || sideA === sideC || sideB === sideC:
        triangleType = triangleTypes.isosceles;
        break;
      default:
        triangleType = triangleTypes.scalene;
        break;
    }

    return triangleType;
  }

  public getTriangleType(sideA: number, sideB: number, sideC: number): string {
    return this.isValidTriangleDimensionsSet(sideA, sideB, sideC)
      ? this.triangleType(sideA, sideB, sideC)
      : customErrorMessages.invalidDimensionsSet;
  }

  private isValidTriangleDimensionsSet(
    sideA: number,
    sideB: number,
    sideC: number
  ): boolean {
    return (
      this.isValidSideDimension(sideA) &&
      this.isValidSideDimension(sideB) &&
      this.isValidSideDimension(sideC)
    );
  }

  private isValidSideDimension(side: number): boolean {
    return !isNaN(side) && typeof side === 'number' && side != 0;
  }
}
