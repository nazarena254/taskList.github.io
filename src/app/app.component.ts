import { Component } from '@angular/core';
import { Task } from './task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  tasks:Task[] = [
    new Task(1, 'Do laundry', 'evening'),
    new Task(2, 'Cover lms content', 'morning'),
    new Task(3, 'Work on project', 'mid-morning'),
    new Task(4, 'Go to the market', 'afternoon'),
  ]
  

}
