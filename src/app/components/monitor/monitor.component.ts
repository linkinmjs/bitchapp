import { Component, OnInit, ViewChild } from '@angular/core';
import { MonitorService } from "../../services/monitor.service";
import { ISites } from "../../models/sites.model";
import { MatTableDataSource } from '@angular/material/table';
import {PageEvent,MatPaginator,MatSort} from '@angular/material/';


@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent {

  public sites = [];
  pageEvent: PageEvent;

  displayedColumns: string[] = ['instanceId', 'name', 'instanceType', 'status'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  public dataSource = new MatTableDataSource<ISites>();

  constructor(private _MonitorService: MonitorService) { }

  @ViewChild(MatSort,{static: false}) sort: MatSort;
  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this._MonitorService.getSites()
      .subscribe(res => {

        /* Fuente para solucionarlo:  https://code-maze.com/angular-material-table/ */
        this.dataSource.data = res as ISites[];
        console.log(this.dataSource);
      });

      this.dataSource.sort = this.sort;
      
      console.log(this.paginator);

  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource);
  }
}
