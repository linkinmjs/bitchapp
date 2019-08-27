import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { MatPaginator } from '@angular/material/paginator';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { IClient } from 'src/app/models/client.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})

export class ClientComponent {

  displayedColumns: string[] = ['id', 'name', 'ip', 'urlsitio', 'userssh', 'keyssh', 'directorypath', 'service', 'business', 'contacto', 'socialreason'];

  public customers = [];

  constructor(private _clientService: ClientService) { 
    
  }
  
  columnsToDisplay = ['name', 'ip', 'urlsitio', 'service'];
  expandedElement: IClient | null;

  ngOnInit() {
    this._clientService.getClients()
      .subscribe(data => this.customers = data);
    
  }
}
