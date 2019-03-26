import { Injectable } from '@angular/core';
import {environment} from '../mock-jobs';
import {ENVIRONMENTS} from '../mock-jobs';
import {failedRun} from '../mock-jobs';
import {FAILEDRUNS} from '../mock-jobs';

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
}
