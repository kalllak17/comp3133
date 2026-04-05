import { Component } from '@angular/core';
import { Student} from '../student/student'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-students',
  imports: [Student, DatePipe],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent {
  title = 'My List of Students';

  getTitle() {
    return this.title;
  }

  getCurrentDate() {
    return Date.now();
  }
}
