import { Identifiers } from '@angular/compiler';

export class job {
    id: number;
    name: string;
    environment: string;
    lastrun: string;
    successfulruns: number;
    exceptionruns: number;
    timedoutruns: number;
}

export class environment {
    name: string;
}

export class failedRun{
    jobId: number;
    runId: number;
    environment: string;
    jobName: string;
    runTime: any;
    completionTime: any;
    recordsPulled: number;
    recordsSucceeded: any;
    recordsFailed: any;
    
}


export const JOBS: job[] = [
    { id: 11, name: 'Mr. Nice', environment: 'test', lastrun: '', successfulruns: 100, exceptionruns: 0, timedoutruns: 0},
    { id: 12, name: 'Narco', environment: 'dev', lastrun: '', successfulruns: 100, exceptionruns: 0, timedoutruns: 0  },
    { id: 13, name: 'Bombasto', environment: 'dev', lastrun: '', successfulruns: 100, exceptionruns: 0, timedoutruns: 0  },
    { id: 14, name: 'Celeritas', environment: 'prod', lastrun: '', successfulruns: 100, exceptionruns: 0, timedoutruns: 0  },
    { id: 15, name: 'Magneta', environment: 'test', lastrun: '', successfulruns: 100, exceptionruns: 0, timedoutruns: 0  },
    { id: 16, name: 'RubberMan', environment: 'prod', lastrun: '', successfulruns: 98, exceptionruns: 2, timedoutruns: 0  },
    { id: 17, name: 'Dynama', environment: 'dev', lastrun: '', successfulruns: 100, exceptionruns: 0, timedoutruns: 0  },
    { id: 18, name: 'Dr IQ', environment: 'dev', lastrun: '', successfulruns: 50, exceptionruns: 0, timedoutruns: 50  },
    { id: 19, name: 'Magma', environment: 'test', lastrun: '', successfulruns: 72, exceptionruns: 28, timedoutruns: 0  },
    { id: 20, name: 'Tornado', environment: 'prod', lastrun: '', successfulruns: 100, exceptionruns: 0, timedoutruns: 0  }
  ];

  export const ENVIRONMENTS: environment[] = [
      {name: 'prod'},
      {name: 'dev'},
      {name: 'qa'}
  ]

  export const FAILEDRUNS: failedRun[] = [
    { jobId: 12, runId: 21345, environment: 'dev', jobName: 'job3245', runTime: "2153254", completionTime: "23452345", recordsPulled: 2, recordsSucceeded: 1, recordsFailed: 1},
    { jobId: 14, runId: 2345, environment: 'dev', jobName: 'job2345', runTime: "2153254", completionTime: "23452345", recordsPulled: 2, recordsSucceeded: 1, recordsFailed: 1},
    { jobId: 16, runId: 234, environment: 'prod', jobName: 'job53', runTime: "2153254", completionTime: "23452345", recordsPulled: 2, recordsSucceeded: 1, recordsFailed: 1},
    { jobId: 34, runId: 3456, environment: 'dev', jobName: 'job36', runTime: "2153254", completionTime: "23452345", recordsPulled: 2, recordsSucceeded: 1, recordsFailed: 1},
    { jobId: 45, runId: 34543, environment: 'test', jobName: 'job634', runTime: "2153254", completionTime: "23452345", recordsPulled: 2, recordsSucceeded: 1, recordsFailed: 1},
    { jobId: 435, runId: 1254634, environment: 'test', jobName: 'job63', runTime: "2153254", completionTime: "23452345", recordsPulled: 2, recordsSucceeded: 1, recordsFailed: 1},
    { jobId: 23, runId: 3456, environment: 'dev', jobName: 'job36', runTime: "2153254", completionTime: "23452345", recordsPulled: 2, recordsSucceeded: 1, recordsFailed: 1},
    { jobId: 12, runId: 21345, environment: 'dev', jobName: 'job3245', runTime: "2153254", completionTime: "23452345", recordsPulled: 2, recordsSucceeded: 1, recordsFailed: 1},
    { jobId: 14, runId: 2345, environment: 'dev', jobName: 'job2345', runTime: "2153254", completionTime: "23452345", recordsPulled: 2, recordsSucceeded: 1, recordsFailed: 1},
    { jobId: 16, runId: 234, environment: 'prod', jobName: 'job53', runTime: "2153254", completionTime: "23452345", recordsPulled: 2, recordsSucceeded: 1, recordsFailed: 1},
    { jobId: 34, runId: 3456, environment: 'dev', jobName: 'job36', runTime: "2153254", completionTime: "23452345", recordsPulled: 2, recordsSucceeded: 1, recordsFailed: 1},
    { jobId: 45, runId: 34543, environment: 'test', jobName: 'job634', runTime: "2153254", completionTime: "23452345", recordsPulled: 2, recordsSucceeded: 1, recordsFailed: 1},
    { jobId: 435, runId: 1254634, environment: 'test', jobName: 'job63', runTime: "2153254", completionTime: "23452345", recordsPulled: 2, recordsSucceeded: 1, recordsFailed: 1},
    { jobId: 23, runId: 3456, environment: 'dev', jobName: 'job36', runTime: "2153254", completionTime: "23452345", recordsPulled: 2, recordsSucceeded: 1, recordsFailed: 1},

  ]