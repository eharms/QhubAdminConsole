import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { ExceptionsService } from './exceptions.service';
import { environment } from '../objects';
import { failedRun } from '../objects';
import { document } from '../objects';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-exceptionsviewer',
  templateUrl: './exceptionsviewer.component.html',
  styleUrls: ['./exceptionsviewer.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed, void', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
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
    'recordsSucceeded', 'recordsFailed', 'actions'
   ]
  documents: document[];
  dataSource: MatTableDataSource<failedRun>;
  expandedElement: failedRun | null;
  log: {
    keys: any
    source: any
  };

   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;

  constructor(private ExceptionsService: ExceptionsService, public dialog: MatDialog) {
    
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

  getExceptionDetails(runId, jobId){
    console.log('job: ' + jobId + ' Run: ' + runId)
    this.documents = this.ExceptionsService.getDocuments(runId, jobId)
  }

  getLog(docId: any){
    console.log('docId: ' + docId)
    this.log = this.ExceptionsService.getLog(docId);
    //this.log = {keys: preProcessed.keys, source: preProcessed.source}
    //console.log(this.log)
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(logViewer, {
      width: '99%',
      data: {source: this.prettyPrintJson.toHtml(this.log.source), keys: this.prettyPrintJson.toHtml(this.log.keys)}
    });
  }

  prettyPrintJson = {
    toHtml: (thing) => {
       const htmlEntities = (string) => {
          // Makes text displayable in browsers
          return string
             .replace(/&/g,   '&amp;')
             .replace(/\\"/g, '&bsol;&quot;')
             .replace(/</g,   '&lt;')
             .replace(/>/g,   '&gt;');
          };
       const replacer = (match, p1, p2, p3, p4) => {
          // Converts the four parenthesized capture groups into HTML
          const part =       { indent: p1, key: p2, value: p3, end: p4 };
          const key =        '<span class=json-key>';
          const val =        '<span class=json-value>';
          const bool =       '<span class=json-boolean>';
          const str =        '<span class=json-string>';
          const isBool =     ['true', 'false'].includes(part.value);
          const valSpan =    /^"/.test(part.value) ? str : isBool ? bool : val;
          const findName =   /"([\w]+)": |(.*): /;
          const indentHtml = part.indent || '';
          const keyHtml =    part.key ? key + part.key.replace(findName, '$1$2') + '</span>: ' : '';
          const valueHtml =  part.value ? valSpan + part.value + '</span>' : '';
          const endHtml =    part.end || '';
          return indentHtml + keyHtml + valueHtml + endHtml;
          };
       const jsonLine = /^( *)("[^"]+": )?("[^"]*"|[\w.+-]*)?([{}[\],]*)?$/mg;
       return htmlEntities(JSON.stringify(thing, null, 3))
          .replace(jsonLine, replacer);
       }
    };

  rekickDoc(docId: any){
    if(window.confirm('reKick ' + docId + '?'))
    this.ExceptionsService.rekickDoc(docId);
  }

  rekickJob(jobId: any){
    if(window.confirm('reKick ' + jobId + '?'))
    this.ExceptionsService.rekickFailedRun(jobId);
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

@Component({
  selector: 'logViewer',
  templateUrl: './logViewer.component.html',
  styleUrls: ['./logViewer.component.css'],
})
export class logViewer {

  constructor(
    public dialogRef: MatDialogRef<logViewer>,
    
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      console.log(data.Log)
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

export interface DialogData {
  JobId: string;
  Log: string;
}