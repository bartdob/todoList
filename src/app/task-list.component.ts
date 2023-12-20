import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Task } from './Task';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgFor],
  template: `
    <ul class="text-left list-group d-flex justify-content-between">
      <li class="list-group-item m-1 " *ngFor="let task of tasks">
        <button [class.line-through]="task.done" (click)=toggleDoneStatus(task)>
       {{task.id}} {{task.name}}
          <div class="float-right ml-5 justify-content-end">
            <button class="btn btn-danger align-end" (click)="deleteTask(task)"> del</button>
          </div>

          
        </button>
      </li>
    </ul>
  `,
  styles: ``
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];

  toggleDoneStatus(task: Task){
    task.done = !task.done;
  }
  
  deleteTask(task: Task){
    this.tasks = this.tasks.filter(
      (t) => t.id !== task.id
    )
  }
}
