import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Project } from "./project";
import {Observable, of} from "rxjs";
import {Task} from "./task";
import {ProjektName} from "./projekt-name";
import {UpdateTask} from "./update-task";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]>  {
    return this.http.get<Project[]>('http://localhost:8080/projects')
  }

  postID(id){
    const url = "http://www.localhost:8080/projects/id";
    this.http.post(url, id).subscribe(x => id = x);
  }

  getProjectName(): Observable<ProjektName[]> {
    const url = "http://www.localhost:8080/projects/projectName";
    return this.http.get<ProjektName[]>(url);
  }

  getTasks(): Observable<Task[]>{
    const url = `http://www.localhost:8080/tasks`;
    return  this.http.get<Task[]>(url)
  }


  updateTaskStatus(task){
    const url = "http://www.localhost:8080/tasks/updatedStatus";
    this.http.post(url, task).subscribe();

}

  postTaskID(id){
    const url = "http://www.localhost:8080/tasks/id";
    this.http.post(url, id).subscribe(x => id = x);
  }

  getSelectedTask(): Observable<Task[]> {
    const url = "http://www.localhost:8080/tasks/selectedTask";
    return  this.http.get<Task[]>(url);
  }

  postTime(time){
    const url = "http://www.localhost:8080/tasks/timeWorked";
    this.http.post(url, time).subscribe(x => time = x);
  }
}
