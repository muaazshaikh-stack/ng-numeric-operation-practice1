import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NumericOperationsService } from '../../../services/numeric-operatins.service';

@Component({
  standalone: true,  // Standalone component
  imports: [ReactiveFormsModule, CommonModule],  // Import ReactiveFormsModule and CommonModule
  selector: 'app-cube-root',
  templateUrl: './cube-root.component.html',
  styleUrls: ['./cube-root.component.scss']
})
export class CubeRootComponent {
  inputFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[0-9]+$')  // Only allow positive integers
  ]);

  result: string | null = null; // Changed to string for displaying messages

  constructor(private numericOperationsService: NumericOperationsService) {}

  onCalculateCubeRoot() {
    // Check if the input value is valid
    if (this.inputFormControl.valid) {
      const number = Number(this.inputFormControl.value); // Convert the value to a number here
      const cubeRoot = this.numericOperationsService.getCubeRoot(number);
      this.result = cubeRoot !== null 
          ? `The cube root of ${number} is ${cubeRoot}.`
          : 'Please enter a valid positive integer number.';
    } else {
      this.result = 'Please enter a valid positive integer number.';
    }
  }
}
