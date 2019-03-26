import { Component, OnInit, ViewChild } from '@angular/core';
import { ExceptionsService } from './exceptions.service';
import { environment } from '../mock-jobs';
import { failedRun } from '../mock-jobs';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-exceptionsviewer',
  templateUrl: './exceptionsviewer.component.html',
  styleUrls: ['./exceptionsviewer.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ExceptionsviewerComponent implements OnInit {

  environments: environment[];
  failedRuns: failedRun[];
  datetime: any;
  environment: environment;
  jobId: any;
  displayedColumns: string[] = [
    'jobId', 'runId', 'environment', 'jobName',
    'runTime', 'completionTime', 'recordsPulled',
    'recordsSucceeded', 'recordsFailed'
   ]
   dataSource: MatTableDataSource<failedRun>;
   expandedElement: failedRun | null;

   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;

  constructor(private ExceptionsService: ExceptionsService) {
    
   }

  ngOnInit() {
    this.getEnvironments();
  }

  getEnvironments(): void{
    this.environments = this.ExceptionsService.getEnvironments();
  }

  getFailedRuns(): void{
    this.failedRuns = this.ExceptionsService.getExceptions(this.datetime, this.environment, this.jobId);
    console.log('after')
    this.dataSource = new MatTableDataSource(this.failedRuns);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.failedRuns);
  }

  selected(event) {
    this.environment = event.value;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
