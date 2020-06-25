import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Project } from "./project";
import {Observable} from "rxjs";
import {ProjectListComponent} from "./project-list/project-list.component";
import {Task} from "./task";
import {ProjektName} from "./projekt-name";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  deleteProjectNameUrl = "http://www.localhost:8080/projects/projectName";
  url = 'http://localhost:8080/projects';
  projectArray: Project[] = [];

  constructor(private http: HttpClient) { }


  getProjects(): Observable<Project[]>  {
    return this.http.get<Project[]>(this.url)
  }

  postID(id){
    const url = "http://www.localhost:8080/projects/id";
    this.http.post(url, id).subscribe(x => id = x);
  }

  getProjectName(): Observable<ProjektName[]> {
    const url = "http://www.localhost:8080/projects/projectName";
    return this.http.get<ProjektName[]>(url);
  }

  deleteProjectName(id: number): Observable<void> {
    return this.http.delete<void>(`${this.deleteProjectNameUrl}/${id}`)
  }

  getTasks(): Observable<Task>{
    const url = `http://www.localhost:8080/tasks`;
    return  this.http.get<Task>(url)
  }

  postTaskID(id){
    const url = "http://www.localhost:8080/tasks/id";
    this.http.post(url, id).subscribe(x => id = x);
  }

  getSelectedTask(): Observable<Task[]> {
    const url = "http://www.localhost:8080/tasks/selectedTask";
    return  this.http.get<Task[]>(url);
  }
}
