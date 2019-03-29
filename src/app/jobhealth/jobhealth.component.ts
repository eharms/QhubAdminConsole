import { Component, OnInit } from '@angular/core';
import {job, ENVIRONMENTS} from '../objects';
import {JobhealthService} from './jobhealth.service'
import { environment } from '../objects';

@Component({
  selector: 'app-jobhealth',
  templateUrl: './jobhealth.component.html',
  styleUrls: ['./jobhealth.component.css']
})
export class JobhealthComponent implements OnInit {

  jobs: job[];
  environments: environment[];
  datastructure;

  constructor(private jobhealthService: JobhealthService) { }

  ngOnInit() {
    this.getEnvironments()
    this.getDatastructure()
  }

  getEnvironments(): void{
    this.environments = this.jobhealthService.getEnvironments();
  }

  updateDatastructure(env: any): void {
    


  }

  getDatastructure() : void {
    this.jobs = this.jobhealthService.getJobs();
    /*
    this.jobs = this.jobhealthService.getJobs()
    .subscribe(jobs => this.jobs = jobs);
    */
    let env: string[] = [];
    this.jobs.forEach((job, i) => {
      env.push(job.environment);
    })
    let unique = new Set(env);

    let uniqueArray = Array.from(unique);
    let finalobject = [];

    uniqueArray.forEach((env) => {
      let totalSuccess = 0;
      let totalException = 0;
      let totalTimeout = 0;
      let jobtemp = []

      this.jobs.forEach((job, i) => {
        if(env == job.environment){ 
          jobtemp.push(job);
          totalSuccess += job.successfulruns;
          totalException += job.exceptionruns;
          totalTimeout += job.timedoutruns;
        }
      })
      let total = totalSuccess + totalException + totalTimeout;
      finalobject.push({environment: env, jobs: jobtemp, totalSuccess: totalSuccess, totalException: totalException, totalTimeout: totalTimeout, total: total})
    })
    this.datastructure = finalobject
  }
  

}
