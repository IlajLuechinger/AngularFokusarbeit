import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {

  constructor() { }

  time: number = 0;
  display ;
  interval;
  timeString: string;




  ngOnInit() {
    this.interval = setInterval(() => {
      if (this.time === 0) {
        this.time++;
      } else {
        this.time++;
      }
      this.display=this.transform( this.time)
    }, 1000);
  }
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

  }
}
