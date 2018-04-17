import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonToggle = false;
  buttonClickLog = [];
  buttonClick() {
    this.buttonToggle = !this.buttonToggle;
    this.buttonClickLog.push(new Date());
  }
}
