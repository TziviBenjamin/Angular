import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Drivers } from './components/drivers/drivers';


@Component({
  selector: 'app-root',
  imports: [Drivers],
  templateUrl: './app.html',
  // styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lesson7');
}
