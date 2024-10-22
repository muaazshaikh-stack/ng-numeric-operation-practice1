import { Injectable } from '@angular/core';
import { Utils } from '../helper/utils';

@Injectable({
  providedIn: 'root',
})
export class NumericOperationsService {
  public isPrimeNumber(value: number): boolean {
    if (Utils.notNullAndUndefiend(value)) {
      if (value < 2) return false;

      for (let i = 2; i <= Math.sqrt(value); i++) {
        if (value % i === 0) return false;
      }

      return true;
    }

    return false;
  }

  public getCubeRoot(value: number): number | null {
    if (Utils.notNullAndUndefiend(value)) {
      return Math.cbrt(value); // Calculate the cube root
    }
    return null; // Return null if the value is null or undefined
  }

  public getSquareRoot(value: number): number | null {
    if (Utils.notNullAndUndefiend(value)) {
      if (value < 0) return null; // Square root is not defined for negative numbers
      return Math.sqrt(value); // Calculate the square root
    }
    return null; // Return null if the value is null or undefined
  }

  public getFactorial(value: number): number | null {
    if (Utils.notNullAndUndefiend(value)) {
      if (value < 0) return null; // Factorial is not defined for negative numbers
      if (value === 0 || value === 1) return 1; // Base case for factorial

      let result = 1; // Initialize result
      for (let i = 2; i <= value; i++) {
        result *= i; // Multiply result by the current number
      }
      return result; // Return the calculated factorial
    }
    return null; // Return null if the value is null or undefined
  }
}
