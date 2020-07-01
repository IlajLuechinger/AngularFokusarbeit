import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../task";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {ProjectService} from "../project.service";
import { Location} from "@angular/common";

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
    private projectService: ProjectService,
    private location: Location,
  ) { }

  ngOnInit() {
    if (this.auth.getFromSession() == '[true]') {
      setTimeout(() => this.projectService.getSelectedTask().subscribe(data => this.tasks = data), 1500);
    } else {
      this.router.navigate([''])
    }
    }

  logOut(){
    this.auth.logout();
  }

  startTimer() {
    this.router.navigate(['/stopwatch']);
  }

  goBack() {
    this.location.back();
  }
}
