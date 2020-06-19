import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

import {Projects} from "./projects";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  constructor(private http: HttpClient) { }

  getProjects(){
    let url = 'http://localhost:8080/projekte';
    return this.http.get<Projects>(url);
  }
}
