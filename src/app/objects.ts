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

export class document{
    docId: any;
    sourceId: any;
    stream: string;
}

export class log{
    log: any;
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

  export const DOCS1: document[] = [
      {docId: 'afe23sfse', sourceId: 'escet5cest5e5', stream: "mod"},
      {docId: 'ac4rrsfdsf', sourceId: '32lkj45hklje', stream: "ks"},
      {docId: 'wc34t55es5', sourceId: 'scecescte5t5', stream: "mod"},
      {docId: 'cet5setest', sourceId: 'cse5tes5tesc', stream: "ks"},
  ]

  export const DOCS2: document[] = [
    {docId: 'sdrws4dwr', sourceId: 'sd4s4d4sd4sd', stream: "ks"},
    {docId: 'd4wrwrd4sr', sourceId: 'sd4sd4d4sd4', stream: "ks"},
    {docId: 'sd4s4dd4rd4', sourceId: 's4ds4d4ds4d', stream: "mod"},
    {docId: 's4d4ds4d4dd', sourceId: 'cse5tessd4s', stream: "ks"},
]

export const LOG1: log = {
    log: {"modifiedRecords":[],"keyStateRecords":[{"_docId":"d516430f-ca59-4070-a1f5-cdf222f9de12","_sourceId":"aHz0R0000004EjzSAE","_doc":{"keys":{"payload":{"FFSerNumId":"aFD0R000000CcQZWA0"},"SerialToUSPacket":{"type":"Apex Class","apiName":"UniversalSerialAppService.queryRequestMessage","data":"{\"requestId\":null}"},"USQueryError":{"err":"SFDC Platform Error: Type for not found for class name: RPC_SCM_QueryUSBySN ","msg":""}},"source":{"attributes":{"type":"qHUB__Key_State_Record__c","url":"/services/data/v43.0/sobjects/qHUB__Key_State_Record__c/aHz0R0000004EjzSAE"},"Id":"aHz0R0000004EjzSAE","Name":"KSR-0000012031","qHUB__API_Object__c":"SCMC__Serial_Number__c","qHUB__Key_State__c":"aI00R0000004CDfSAM","qHUB__Key_State_Name__c":"On Scrap","qHUB__Payload__c":"{\"FFSerNumId\":\"aFD0R000000CcQZWA0\"}"}},"_error":true}],"deletedRecords":[],"total":1,"success":0,"failure":1}
}