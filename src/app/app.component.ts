import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TaskListComponent } from "./task-list.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ParseSourceFile } from '@angular/compiler';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <div class="container fluid text-center">
    <h1>ToDo list</h1>
      <div class="text-center">
        <input #taskNameInput class="form-control w-50"/>
        <button (click)="addTask(taskNameInput.value)" type="button" class="btn btn-warning">Add</button>
        <app-task-list [tasks]="tasks"/>
      </div>
    </div>
  `,
    imports: [NgFor, TaskListComponent, TooltipModule]
})
export class AppComponent {
  constructor(private modalService: NgbModal) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
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
