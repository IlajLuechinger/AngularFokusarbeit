import { Component, OnInit } from '@angular/core';
import { ProjectService} from "../project.service";
import {Observable} from "rxjs";
import {Projects} from "../projects";


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects: Observable<Projects>;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }



}
