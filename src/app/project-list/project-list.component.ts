import { Component, OnInit } from '@angular/core';
import { ProjectService} from "../project.service";
import {Project} from "../project";


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {


  constructor(private projectService: ProjectService) {

  }

  projects: Project[];

  ngOnInit() {
    this.getProjects()
  }

  getProjects(): void {
    this.projectService.getProjects().subscribe(projects => this.projects = projects)
  }




}
