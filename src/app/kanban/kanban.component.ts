import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";


import {Task} from "../task";
import {Project} from "../project";
import {ProjectService} from "../project.service";

import {AuthService} from "../auth.service";
import {UpdateTask} from "../update-task";


@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit {

  tasks: Task[] = [];
  todo: Task[] = [];
  inProgress: Task[] = [];
  testing: Task[] = [];
  done: Task[] = [];
  project: Project;
  updateTask: UpdateTask = { };
  projectNames: Project[] = [];


  constructor(
    private projectService: ProjectService,
    private router: Router,
    private auth: AuthService,
    private location: Location,
  ) {
  }

  //Überprüfen ob der Benutzer angemeldet ist, falls ja werden die Aufgaben und der Name des ausgewählten Projektes geladen.
  ngOnInit() {
    if (this.auth.getFromSession() == '[true]') {
      setTimeout(() => this.getTasks(), 500);
      setTimeout(() => this.projectService.getProjectName().subscribe(data => this.projectNames = data), 500);
    } else {
      this.router.navigate(['']);
    }
  }

  //Die Aufgaben werden in die verscheidenen Stadien gebracht
  getTasks(): void {
    this.projectService.getTasks().subscribe(data => {
      this.tasks = data;
      this.tasks.forEach(task => {
        switch (task.status.toLowerCase()) {
          case 'to do': {
            this.todo.push(task);
            break;
          }
          case 'in progress': {
            this.inProgress.push(task);
            break;
          }
          case 'testing': {
            this.testing.push(task);
            break;
          }
          case 'done': {
            this.done.push(task);
            break;
          }
        }
      })
    });
  }


  //Die Aufgaben werden entweder im Array an einen neuen Platz geleget oder wechselet den Array
  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  //Zuerst wird der Status der Aufgaben gespeichert, dann meldet er sich ab
  logOut() {
    this.updateTasks();
    this.auth.logout();
  }


  //Alle Aufgaben werden zuest aus dem Array gelöscht dann werden alle mit dem neuen Werten in einen Array gespeichert
  allTasksInOneArray(): Task[] {
    while (this.tasks.length != 0) {
      this.tasks.pop();
    }
    this.todo.forEach(task => {
      task.status = 'To Do';
      this.tasks.push(task);
    });
    this.inProgress.forEach(task => {
      task.status = 'In Progress';
      this.tasks.push(task);
    });
    this.testing.forEach(task => {
      task.status = 'Testing';
      this.tasks.push(task);
    });
    this.done.forEach(task => {
      task.status = 'Done';
      this.tasks.push(task);
    });
    return this.tasks;
  }


  //Der Status und die ID werden auf localhost geschrieben.
  updateTasks() {
    this.allTasksInOneArray();
    this.tasks.forEach(task => {
      switch (task.status.toLowerCase()) {
        case 'to do': {
          this.updateTask.status = 1;
          this.updateTask.aufgabeID = task.aufgabeID;
          this.projectService.updateTaskStatus(this.updateTask);
          break
        }
        case 'in progress': {
          this.updateTask.status = 2;
          this.updateTask.aufgabeID = task.aufgabeID;
          this.projectService.updateTaskStatus(this.updateTask);
          break
        }
        case 'testing': {
          this.updateTask.status = 3;
          this.updateTask.aufgabeID = task.aufgabeID;
          this.projectService.updateTaskStatus(this.updateTask);
          break
        }
        case 'done': {
          this.updateTask.status = 4;
          this.updateTask.aufgabeID = task.aufgabeID;
          this.projectService.updateTaskStatus(this.updateTask);
          break
        }
      }
    });
  }

  //Wir ausgeführt, wenn man aufs div drückt und sendet die ID der Aufgabe auf localhost
  postTaskIdAndUpdateTasks(aufgabeID: number) {
    this.updateTasks();
    setTimeout(() => this.projectService.postTaskID(aufgabeID), 1000);
  }

  //Speichert die Aufgaben und geht dann auf die vorherige Seite
  goBack() {
    this.updateTasks();
    this.location.back();
  }
}
