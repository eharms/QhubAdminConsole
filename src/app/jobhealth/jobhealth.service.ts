import { Injectable } from '@angular/core';
import {JOBS} from '../mock-jobs';
import {job} from '../mock-jobs';


@Injectable({
  providedIn: 'root'
})
export class JobhealthService {

  constructor() { }

  getJobs(): job[] {
    return JOBS;
  }
}
