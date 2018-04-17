import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',  // html would be <app-servers></app-servers>
  // selector: '[app-servers]'  // html would need  app-servers as a custom attribute
  // selector: '.app-servers'  // html would need class of app-servers
  // template: `  // template can be used instead of templateUrl
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'testserver';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];
  constructor() {
    setTimeout(() => { this.allowNewServer = true; }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
