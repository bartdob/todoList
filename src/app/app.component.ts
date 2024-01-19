import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TaskListComponent } from "./task-list.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from './Task';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <div class="container text-center">
    <h1>ToDo list</h1>
      <div class="text-center container mt-5">
        <div class="fluid-container">
          <input (keyup.enter)="addTask(taskNameInput.value); taskNameInput.value = '' " 
          name="taskInput" #taskNameInput placeholder="please enter note" 
          class="input-group input-group-sm mb-3" style="float: left;"/>
          <button [classList]=""
          (click)="addTask(taskNameInput.value); taskNameInput.value = '' "
         class="btn btn-primary text-dark mb-4"
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

  tasks: Task[] = [
    {
          id: 0,
          name: "",
          done: false
        },
  ];
  // tasks = [
  //   {
  //     id: 0,
  //     name: "",
  //     done: false
  //   },
  // ];

  addTask(name:string){
    this.tasks.push({
      id: this.tasks.slice(-1)[0].id+1,
      name,
      done:false
    })
  }
};
