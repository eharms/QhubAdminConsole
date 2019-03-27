import { Injectable } from '@angular/core';
import {environment} from '../mock-jobs';
import {ENVIRONMENTS} from '../mock-jobs';
import {failedRun} from '../mock-jobs';
import {FAILEDRUNS} from '../mock-jobs';
import {document} from '../mock-jobs';
import {DOCS1} from '../mock-jobs';
import {DOCS2} from '../mock-jobs';
import {LOG1} from '../mock-jobs';

@Injectable({
  providedIn: 'root'
})
export class ExceptionsService {

  constructor() { }

  getEnvironments(): environment[]{
    return ENVIRONMENTS;
  }
  getExceptions(dateTime?: any, environment?: any, jobId?: any){
    console.log('service')
    return FAILEDRUNS;
  }
  getDocuments(runId?: any, jobId?: any): document[]{
    console.log('runId' + runId)
    console.log("length: " + runId.toString().length);
    if(runId.toString().length > 3){return DOCS1;}
    else {return DOCS2;}
  }
  getLog(docId: any){
    return JSON.stringify(LOG1, undefined, 2)
  }
  rekickDoc(id: any){
    console.log("re-kicking: " + id)
    //do the thing
  }
  rekickFailedRun(id: any){
    console.log("re-kicking: " + id)
    //do the thing
  }
}
