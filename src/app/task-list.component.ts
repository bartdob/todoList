import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Task } from './Task';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgFor],
  template: `
    <ul class="text-center">
      <li *ngFor="let task of tasks">
        <button [class.line-through]="task.done" (click)=toggleDoneStatus(task)>
        {{task.name}}
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

}
