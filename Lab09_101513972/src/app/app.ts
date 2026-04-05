import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentsComponent } from './students.component/students.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Lab09_101513972');
}
