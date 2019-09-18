import { Component, OnInit } from '@angular/core';
import { MonitorService } from "../../services/monitor.service";
import { ISites } from "../../models/sites.model";
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent {

  public sites = [];

  displayedColumns: string[] = ['instanceId', 'name', 'instanceType', 'status'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  public dataSource = new MatTableDataSource<ISites>();

  constructor(private _MonitorService: MonitorService) { }

  ngOnInit() {
    this._MonitorService.getSites()
      .subscribe(res => {

        /* Fuente para solucionarlo:  https://code-maze.com/angular-material-table/ */
        this.dataSource.data = res as ISites[];
        console.log(this.dataSource);
      });

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource);
  }
}
