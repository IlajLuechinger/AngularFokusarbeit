import { Component, OnInit } from '@angular/core';
import { ProjectService} from "../project.service";
import {Project} from "../project";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {LoginComponent} from "../login/login.component";


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  constructor(private projectService: ProjectService,
              private  router: Router,
              private auth: AuthService,
              ) {

  }

  projectArray: Project[] = [];


  ngOnInit() {
      this.getProjects()
  }

  getProjects(): void {
    this.projectService.getProjects().subscribe(project => this.projectArray = project)
  }



  logOut(){
    this.auth.logout();
  }

  postID(id: number) {
    this.projectService.postID(id);
  }
}
