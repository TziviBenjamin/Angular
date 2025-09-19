import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Class } from './moduls/app/components/class/class';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Class],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('lesson2');
}
