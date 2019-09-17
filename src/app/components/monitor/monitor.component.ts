import { Component, OnInit } from '@angular/core';
import { MonitorService } from "../../services/monitor.service";
import { ISites } from "../../models/sites.model";
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent{

  public sites = [];

  displayedColumns: string[] = ['instanceId','name','instanceType','status'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource = new MatTableDataSource(this.sites);

  constructor(private _MonitorService: MonitorService) { }

  ngOnInit() {
    this._MonitorService.getSites()
      .subscribe(data => this.sites = data);
      
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
