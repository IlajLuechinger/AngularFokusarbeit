import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Project } from "./project";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {




  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project>  {
    let url = 'http://localhost:8080/projects';
    return this.http.get<Project>(url)
  }
}
