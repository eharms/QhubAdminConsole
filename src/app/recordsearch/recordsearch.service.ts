import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecordsearchService {

  private reqUrl = 'someurl'; //TODO: Get real url

  constructor() { }

  searchRecords(searchString: any): any{
    /*
      const url = `${this.reqUrl}?searchString={searchString}`;
      return this.http.get(url)
        .pipe(
          tap(_ => this.log('records searched')),
          catchError(this.handleError<Hero[]>('searchRecords', []))
      );
    */
  }

}
