import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Project } from "./project";
import {Observable} from "rxjs";
import {Task} from "./task";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  constructor(private http: HttpClient) { }

  //Holt die Projekte von http://localhost:8080/projects
  getProjects(): Observable<Project[]>  {
    return this.http.get<Project[]>('http://localhost:8080/projects')
  }

  //Sendet die ID vom Projekt auf welches man gedrückt hat auf http://www.localhost:8080/projects/id
  postID(id){
    const url = "http://www.localhost:8080/projects/id";
    this.http.post(url, id).subscribe(x => id = x);
  }

  //Holt den Projektname, welche durch PostID klar wurde von http://www.localhost:8080/projects/projectName
  getProjectName(): Observable<Project[]> {
    const url = "http://www.localhost:8080/projects/projectName";
    return this.http.get<Project[]>(url);
  }

  //Holt die Aufgaben von http://www.localhost:8080/tasks
  getTasks(): Observable<Task[]>{
    const url = `http://www.localhost:8080/tasks`;
    return  this.http.get<Task[]>(url)
  }


  //Sendet die neuen Werte der Aufgaben auf http://www.localhost:8080/tasks/updatedStatus
  updateTaskStatus(task){
    const url = "http://www.localhost:8080/tasks/updatedStatus";
    this.http.post(url, task).subscribe();

}

  //Sendet die ID von der Aufgabe, auf welche man gedrückt hat
  postTaskID(id){
    const url = "http://www.localhost:8080/tasks/id";
    this.http.post(url, id).subscribe(x => id = x);
  }

  //Man bekommt die Aufgabe basieren auf der id von postTaskID
  getSelectedTask(): Observable<Task[]> {
    const url = "http://www.localhost:8080/tasks/selectedTask";
    return  this.http.get<Task[]>(url);
  }

  //Sendet die gearbeitete Zeit auf http://www.localhost:8080/tasks/timeWorked
  postTime(time){
    const url = "http://www.localhost:8080/tasks/timeWorked";
    this.http.post(url, time).subscribe(x => time = x);
  }
}
