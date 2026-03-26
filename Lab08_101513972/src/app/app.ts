import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Heroes } from './heroes/heroes';
import {InputFormat} from './input-format'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Heroes, InputFormat],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Lab08_101513972');
}
