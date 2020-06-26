import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../task";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {ProjectService} from "../project.service";

@Component({
  selector: 'app-aufgabe-detailliert',
  templateUrl: './aufgabe-detailliert.component.html',
  styleUrls: ['./aufgabe-detailliert.component.scss']
})
export class AufgabeDetailliertComponent implements OnInit {

  tasks: Task[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    setTimeout(()=> this.projectService.getSelectedTask().subscribe(data => this.tasks = data), 500);
  }

  logOut(){
    this.auth.logout();
  }

  startTimer() {
    this.router.navigate(['/stopwatch']);
  }
}
