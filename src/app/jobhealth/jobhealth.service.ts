import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../objects';
import { ENVIRONMENTS } from '../objects';
import {JOBS} from '../objects';
import {job} from '../objects';


@Injectable({
  providedIn: 'root'
})
export class JobhealthService {

  private reqUrl = 'someurl'; //TODO: Get real url

  constructor() { }

  getEnvironments(): environment[]{
    return ENVIRONMENTS;
  }

  getJobs(): job[] {
    return JOBS;
    /*
      const url = `${this.reqUrl}?docId={docId}`;
      return this.http.get(url)
        .pipe(
          tap(_ => this.log('got Docs')),
          catchError(this.handleError<Hero[]>('getDocuments', []))
      );
    */
  }
}
