import { Identifiers } from '@angular/compiler';

// for job health
export class job {
    id: number;
    name: string;
    lastrun: string;
    environment: string;
    successfulruns: number;
    exceptionruns: number;
    timedoutruns: number;
}
// for environments list
export class environment {
    name: string;
}

//for exceptions
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

//failed doc, links to failedRun
export class document{
    docId: any;
    sourceId: any;
    stream: string;
}

//doc payload, links to document
export class log{
    keys: {}
    source: {}
}

//self explanatory
export class searchResult{
    description: string
    data: {}
}

//this is what is to be returned when a search request is sent.
export class searchResultArray{
    results: searchResult[]
}
/*
export const JOBS: job[] = [
    { id: 11, name: 'Mr. Nice', lastrun: '', successfulruns: 100, exceptionruns: 0, timedoutruns: 0},
    { id: 12, name: 'Narco', lastrun: '', successfulruns: 100, exceptionruns: 0, timedoutruns: 0  },
    { id: 13, name: 'Bombasto', lastrun: '', successfulruns: 100, exceptionruns: 0, timedoutruns: 0  },
    { id: 14, name: 'Celeritas', lastrun: '', successfulruns: 100, exceptionruns: 0, timedoutruns: 0  },
    { id: 15, name: 'Magneta', lastrun: '', successfulruns: 100, exceptionruns: 0, timedoutruns: 0  },
    { id: 16, name: 'RubberMan', lastrun: '', successfulruns: 98, exceptionruns: 2, timedoutruns: 0  },
    { id: 17, name: 'Dynama', lastrun: '', successfulruns: 100, exceptionruns: 0, timedoutruns: 0  },
    { id: 18, name: 'Dr IQ', lastrun: '', successfulruns: 50, exceptionruns: 0, timedoutruns: 50  },
    { id: 19, name: 'Magma', lastrun: '', successfulruns: 72, exceptionruns: 28, timedoutruns: 0  },
    { id: 20, name: 'Tornado', lastrun: '', successfulruns: 100, exceptionruns: 0, timedoutruns: 0  }
  ];
*/
  
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
    
        "keys":{
        "QueryQIP":{
        "type":"Apex Class",
        "apiName":"qipAppService.getIPbyQNumMessage",
        "data":"{\"qNumber\":\"Q0420181\"}"
        },
        "RPC_FS_GetActiveQIPFromQNumMS":166,
        "QueryQIPResponse":{
        "recordId":null,
        "messageArray":[
        "no active Qips found for this qNumber"
        ],
        "isError":true
        },
        "error":{
        "error":true
        },
        "QueryQIPResponseError":[
        "no active Qips found for this qNumber"
        ],
        "createUS":{
        "type":"Apex Class",
        "apiName":"UniversalSerialAppService.createMessage",
        "data":"{\"ffSerNumId\":\"aFD0R0000004CGVWA2\"}"
        },
        "RPC_SCM_CreateUniversalSerialMS":174,
        "createUSResponse":{
        "recordId":"a2i0R000000OcSxQAK",
        "messageArray":null,
        "isError":false
        },
        "touchReqId":"aFD0R0000004CGVWA2",
        "touchMeRes":{
        "success":true,
        "isError":false,
        "errorMessage":null
        },
        "syncQIP":{
        "type":"Apex Class",
        "apiName":"qipAppService.syncSerialMessage",
        "data":"{\"serialNumber\":\"Q0420181\",\"ffSerNumId\":\"aFD0R0000004CGVWA2\"}"
        },
        "RPC_FS_SyncSerialNumberWithSCMDataMS":169,
        "syncQIPResponse":{
        "recordId":null,
        "messageArray":[
        "All qIps successfully updated"
        ],
        "isError":false
        }
        },
        "source":{
        "attributes":{
        "type":"SCMC__Serial_Number__c",
        "url":"/services/data/v43.0/sobjects/SCMC__Serial_Number__c/aFD0R0000004CGVWA2"
        },
        "Id":"aFD0R0000004CGVWA2",
        "Name":"SN-00000008",
        "SCMC__Serial_Number__c":"Q0420181",
        "SCMC__InInventory__c":true,
        "SCMC__Original_Serial_Number_Record__c":null
        }
        
}