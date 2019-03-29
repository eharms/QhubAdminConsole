import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {environment} from '../objects';
import {ENVIRONMENTS} from '../objects';
import {failedRun} from '../objects';
import {FAILEDRUNS} from '../objects';
import {document} from '../objects';
import {DOCS1} from '../objects';
import {DOCS2} from '../objects';
import {LOG1} from '../objects';

@Injectable({
  providedIn: 'root'
})
export class ExceptionsService {

  private reqUrl = 'someurl'; //TODO: Get real url

  constructor() { }

  getEnvironments(): environment[]{
    return ENVIRONMENTS;
  }
  
  getExceptions(dateTime?: any, environment?: any, jobId?: any){
    console.log('service')
    return FAILEDRUNS;
    /*
        const url = `${this.reqUrl}?dateTime={dateTime}&environment=${environment}&jobId=${jobId}`;
        return this.http.get(url)
          .pipe(
            tap(_ => this.log('got Exceptions')),
            catchError(this.handleError<Hero[]>('getExceptions', []))
      );
    */
  }
  getDocuments(runId?: any, jobId?: any): document[]{
    console.log('runId' + runId)
    console.log("length: " + runId.toString().length);
    if(runId.toString().length > 3){return DOCS1;}
    else {return DOCS2;}
      /*
        const url = `${this.reqUrl}?runId={runId}&jobId=${jobId}`;
        return this.http.get(url)
          .pipe(
            tap(_ => this.log('got Docs')),
            catchError(this.handleError<Hero[]>('getDocuments', []))
      );
    */
  }
  getLog(docId: any){
    //return JSON.stringify(LOG1, undefined, 2)
    return LOG1
    /*
      const url = `${this.reqUrl}?docId={docId}`;
      return this.http.get(url)
        .pipe(
          tap(_ => this.log('got Docs')),
          catchError(this.handleError<Hero[]>('getDocuments', []))
      );
    */
  }
  rekickDoc(id: any){
    console.log("re-kicking: " + id)
    //do the thing
    /*
      const url = `${this.reqUrl}?id={id}`;
      return this.http.get(url)
        .pipe(
          tap(_ => this.log('kicked Doc')),
          catchError(this.handleError<Hero[]>('rekickDoc', []))
      );
    */
  }
  rekickFailedRun(id: any){
    console.log("re-kicking: " + id)
    //do the thing
    /*
      const url = `${this.reqUrl}?id={id}`;
      return this.http.get(url)
        .pipe(
          tap(_ => this.log('kicked Run')),
          catchError(this.handleError<Hero[]>('rekickFailedRun', []))
      );
    */
  }
}
