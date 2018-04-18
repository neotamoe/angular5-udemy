import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  myNumber = 0;

  constructor() {
  }

  ngOnInit() {
  }


  startGame() {
    console.log('start game clicked');
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.myNumber + 1);
      this.myNumber++;
    }, 1000);
  }

  stopGame() {
    console.log('stop game clicked');
    clearInterval(this.interval);
    console.log(this.myNumber);
  }

}
