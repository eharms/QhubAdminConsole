import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JobhealthComponent } from './jobhealth/jobhealth.component';
import { ExceptionsviewerComponent } from './exceptionsviewer/exceptionsviewer.component';
import { RecordsearchComponent } from './recordsearch/recordsearch.component';

const routes: Routes = [
  { path: 'jobhealth', component: JobhealthComponent },
  { path: 'exceptions', component: ExceptionsviewerComponent },
  { path: 'recordsearch', component: RecordsearchComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [ RouterModule ]
})



export class AppRoutingModule { }
