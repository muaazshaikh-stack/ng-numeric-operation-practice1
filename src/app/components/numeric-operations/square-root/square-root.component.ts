// Angular imports
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngClass
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms'; // Import ReactiveFormsModule for formControl

// Service imports
import { NumericOperationsService } from '../../../services/numeric-operatins.service'; // Ensure the path is correct

@Component({
  standalone: true, // Standalone component
  imports: [CommonModule, ReactiveFormsModule], // Import CommonModule and ReactiveFormsModule
  selector: 'app-square-root',
  templateUrl: './square-root.component.html',
  styleUrls: ['./square-root.component.scss']
})
export class SquareRootComponent {
  inputFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[0-9]+$')  // Allow only positive integers
  ]);

  result: string | null = null; // Changed to string for displaying messages

  constructor(private numericOperationsService: NumericOperationsService) {}

  onCalculateSquareRoot() {
    // Check if the input value is valid
    if (this.inputFormControl.valid) {
      const number = Number(this.inputFormControl.value); // Convert the value to a number here
      const squareRoot = this.numericOperationsService.getSquareRoot(number);
      this.result = squareRoot !== null 
          ? `The square root of ${number} is ${squareRoot}.`
          : 'Please enter a valid positive integer number.';
    } else {
      this.result = 'Please enter a valid positive integer number.';
    }
  }
}
