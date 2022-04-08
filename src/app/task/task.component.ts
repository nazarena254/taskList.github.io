import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  toggleDetails(index){
    this.tasks[index].showDescription = !this.tasks[index].showDescription;
  }

  completeTask(isComplete,index){
    if(isComplete){
      this.tasks.splice(index,1)
    }
  }
  
  tasks:Task[] = [
    new Task(1, 'Do laundry', 'evening'),
    new Task(2, 'Cover lms content', 'morning'),
    new Task(3, 'Work on project', 'mid-morning'),
    new Task(4, 'Go to the market', 'afternoon'),
  ]
  
   
  constructor() { }

  ngOnInit(): void {
  }

}
