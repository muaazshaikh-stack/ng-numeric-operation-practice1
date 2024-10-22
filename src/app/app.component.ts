// Angular imports
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Componet imports
import { NumericOperationComponent } from './components/numeric-operations/numeric-operations.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NumericOperationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-practice';
}
