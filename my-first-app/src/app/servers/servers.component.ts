import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',  // html would be <app-servers></app-servers>
  // selector: '[app-servers]'  // html would need  app-servers as a custom attribute
  // selector: '.app-servers'  // html would need class of app-servers
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
