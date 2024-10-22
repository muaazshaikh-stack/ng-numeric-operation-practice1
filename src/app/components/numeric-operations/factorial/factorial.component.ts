import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

// Helper class imports
import { NumericOperationsService } from '../../../services/numeric-operatins.service'; // Ensure the path is correct

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.scss'], // Correct property name
})
export class FactorialComponent {
  inputFormControl: FormControl; // Declare the form control
  result: string | null = null; // Initialize result variable

  constructor(private numericOperationsService: NumericOperationsService) {
    // Initialize the form control in the constructor
    this.inputFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]+$'), // Only allow positive integers
    ]);
  }

  onCalculateFactorial() {
    // Check if the input value is valid
    if (this.inputFormControl.valid) {
      const number = Number(this.inputFormControl.value); // Convert the value to a number
      const factorial = this.numericOperationsService.getFactorial(number);
      this.result =
        factorial !== null
          ? `The factorial of ${number} is ${factorial}.`
          : 'Please enter a valid positive integer number.';
    } else {
      this.result = 'Please enter a valid positive integer number.';
    }
  }
}
