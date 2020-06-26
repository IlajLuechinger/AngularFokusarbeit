import { Component, OnInit } from '@angular/core';
import {Task} from "../task";
import {Project} from "../project";
import {ProjectService} from "../project.service";

import {Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {ProjektName} from "../projekt-name";

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit {

  tasks: Task[] =  [];
  project: Project;
  projectNames: ProjektName[] = [];


  constructor(
    private projectService: ProjectService,
    private router: Router,
    private auth: AuthService,
    ) { }

  ngOnInit() {
      this.getTasks();
      setTimeout(()=>this.projectService.getProjectName().subscribe(data => this.projectNames = data), 500);
  }

  getTasks(): void{
    this.projectService.getTasks().subscribe(data => this.tasks = data);
}

logOut(){
    this.auth.logout();
}




  postTaskID(aufgabeID: number) {
    this.projectService.postTaskID(aufgabeID)
  }
}
