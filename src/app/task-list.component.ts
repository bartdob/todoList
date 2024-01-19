import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Task } from './Task';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgFor, NgIf],
  template: `
    <ul class="list-group" *ngIf="tasks">
      <li class="list-group-item d-flex justify-content-between text-white bg-dark" *ngFor="let task of tasks">
        <button [class.line-through]="task.done" (click)=toggleDoneStatus(task)>
        {{task.id}} {{task.name}}
        </button>
            <button class="btn btn-danger" (click)="deleteTask(task)">
              <p>del</p>
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
