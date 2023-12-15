import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TaskListComponent } from "./task-list.component";
import { ParseSourceFile } from '@angular/compiler';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <h1>ToDo list</h1>
    <div class="text-center">
      <input #taskNameInput class="border-b border-b-black-400 outline-none"/>
      <button (click)="addTask(taskNameInput.value)" type="button" class="border border-orange-500 ml-4">Add</button>
      <app-task-list [tasks]="tasks"/>
    </div>
  `,
    imports: [NgFor, TaskListComponent, TooltipModule]
})
export class AppComponent {
  tasks = [
    {
      name: "job 1",
      done: false
    },
    {
      name: "job 1",
      done: false
    },

  ];

  addTask(name:string){
    this.tasks.push({
      name,
      done:false
    });

  // deleteTask(id: Number){
  // }
}
};
