import { AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Store } from './components/store/store';
import { ReverseTextPipe } from './pipes/reverse-text-pipe';

@Component({
  selector: 'app-root',
  imports: [Store,ReverseTextPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{
  


}

