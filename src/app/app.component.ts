import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TaskListComponent } from "./task-list.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ParseSourceFile } from '@angular/compiler';
import { Task } from './Task';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <div class="container text-center">
    <h1>ToDo list</h1>
      <div class="text-center container mt-5">
        <div>
          <input #taskNameInput class="form-control float-left"/>
          <button (click)="addTask(taskNameInput.value)" type="button" class="btn btn-primary text-dark"
          >Add</button>
          <app-task-list [tasks]="tasks"/>
        </div>
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
      id: 1,
      name: "job 1",
      done: false
    },
    {
      id: 2,
      name: "job 1",
      done: false
    },

  ];

  addTask(name:string){
    this.tasks.push({
      id: this.tasks.slice(-1)[0].id+1,
      name,
      done:false
    });

  // deleteTask(id: Number){
  // }
}
};
