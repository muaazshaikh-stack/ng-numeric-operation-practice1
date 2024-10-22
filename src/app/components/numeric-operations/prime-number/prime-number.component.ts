// Angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

// Service imports
import { NumericOperationsService } from '../../../services/numeric-operatins.service';

// Component imports
import { ModelDialogComponent } from '../../model-dialog/model-dialog.component';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ModelDialogComponent],
  selector: 'app-prime-number',
  templateUrl: './prime-number.component.html',
  styleUrls: ['./prime-number.component.scss'],
})
export class PrimeNumberComponent {
  // private numericOperationsService = new NumericOperationsService();

  showDialog = false;

  constructor(private numericOperationsService: NumericOperationsService) {}

  inputFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[0-9]+$'), // Positive integer validation
  ]);

  result: string = null;

  // Check if the number is a valid positive integer
  get isValidNumber(): boolean {
    const value = this.inputFormControl.value;
    return this.inputFormControl.valid && value !== null && Number(value) >= 0;
  }

  // Method to check if a number is prime
  onCalculatePrimeClick() {
    if (this.isValidNumber) {
      const number = Number(this.inputFormControl.value); // Convert the value to a number here
      this.result = this.numericOperationsService.isPrimeNumber(number)
        ? `${number} is a prime number.`
        : `${number} is not a prime number.`;
    } else {
      this.result = 'Please enter a valid positive integer number.';
      this.showDialog = true;
    }
  }
}
