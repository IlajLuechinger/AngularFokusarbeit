import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../project.service";
import {Router} from "@angular/router";
import { Location} from "@angular/common";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {

  constructor( private projectService: ProjectService,
               private router: Router,
               private  location: Location,
               private auth: AuthService) { }

  time: number = 0;
  display ;
  interval;
  timeString: string = "00:00:00";
  timeWorked: number;


  //Zuerst wird überprüft ob der Benutzer eingeloggt dann wird jede 1000 ms die Zeit un 1 erhöht
  ngOnInit() {
    if (this.auth.getFromSession() == '[true]'){
    this.interval = setInterval(() => {
      if (this.time === 0) {
        this.time++;
      } else {
        this.time++;
      }
      this.display=this.transform( this.time)
    }, 1000);
    } else {
      this.router.navigate([''])
    }
  }
  //Hier werden die gezählten Stunden in Minuten und Stunden um gerechnet
  //Wenn die Stunden, Minuten oder Sekunden unter 10 sind wird vorne eine 0 angefügt
  transform(value: number): string {
    var sec_num = value;
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    var hoursString = hours.toString();
    var minutesString = minutes.toString();
    var secondsString = seconds.toString();

    if (hours   < 10) {hoursString   = "0".concat(hoursString);}
    if (minutes < 10) {minutesString = "0".concat(minutesString);}
    if (seconds < 10) {secondsString = "0".concat(secondsString);}
    this.timeString = hoursString+':'+minutesString+':'+secondsString;
    return this.timeString ;
}

  stopTimer() {
    let hours =  parseInt(this.timeString.slice(0,2).toString());
    let minutes = parseInt(this.timeString.slice(3,5).toString());
    let seconds = parseInt(this.timeString.slice(6,9).toString());

    this.timeWorked = hours;
    this.timeWorked += (minutes/60);
    this.timeWorked += (seconds/3600);
    console.log(this.timeWorked);
    this.projectService.postTime(this.timeWorked);
    setTimeout(() => this.location.back() ,500)
  }
}
