import { Component, OnInit } from '@angular/core';
import { ClientService } from "./../../services/client.service";

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {

  public server = [];

  constructor(private _clientService: ClientService) { }

  ngOnInit() {
    this._clientService.getClients()
    .subscribe(data => this.server = data);
  }

}
