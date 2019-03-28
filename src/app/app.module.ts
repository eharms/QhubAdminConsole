import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { JobhealthComponent } from './jobhealth/jobhealth.component';
import { ExceptionsviewerComponent, logViewer } from './exceptionsviewer/exceptionsviewer.component';
import { RecordsearchComponent } from './recordsearch/recordsearch.component';
import { AppMaterialModule } from './app-material.module';
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    JobhealthComponent,
    ExceptionsviewerComponent,
    RecordsearchComponent,
    logViewer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [logViewer],
})
export class AppModule { }
