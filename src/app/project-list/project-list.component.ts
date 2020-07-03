import { Component, OnInit } from '@angular/core';
import { ProjectService} from "../project.service";
import {Project} from "../project";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";


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

  //Falls der Benutzer angemeldet ist werden die Projekte geladen ansonsten wird er zum Login verwiesen
  ngOnInit() {
    if (this.auth.getFromSession() == "[true]"){
      setTimeout(()=>this.getProjects(),100)
    } else {
      this.router.navigate([''])
    }
  }

  //Holt die Projekte
  getProjects(): void {
    this.projectService.getProjects().subscribe(project => this.projectArray = project)
  }


  //Meldet dich ab
  logOut(){
    this.auth.logout();
  }

  //Postet die ID des ausgewählten Projektes
  postID(id: number) {
    this.projectService.postID(id);
  }
}
