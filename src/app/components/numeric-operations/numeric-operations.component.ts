// Angualr imporst
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Component imports
import { PrimeNumberComponent } from './prime-number/prime-number.component';
import { SquareRootComponent } from './square-root/square-root.component';
import { CubeRootComponent } from './cube-root/cube-root.component';
import { FactorialComponent } from "./factorial/factorial.component";


 @Component({
  selector: 'app-numeric-operations',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    PrimeNumberComponent,
    SquareRootComponent,
    CubeRootComponent,
    FactorialComponent
],
  templateUrl: './numeric-operations.component.html',
  styleUrl: './numeric-operations.component.scss',
})


export class NumericOperationComponent {
  currentOperation: string = '';

  onOperationItemClicked(numericOperation: string): void {
    this.currentOperation = numericOperation;
  }
}
