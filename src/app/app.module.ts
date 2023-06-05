import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkerFormComponent } from './worker-form/worker-form.component';
import { WorkerListComponent } from './worker-list/worker-list.component';
import { MachineListComponent } from './machine-list/machine-list.component';
import { MachineFormComponent } from './machine-form/machine-form.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobFormComponent } from './job-form/job-form.component';
import { FreeworkersListComponent } from './freeworkers-list/freeworkers-list.component';
import { TaskFormComponent } from './task-form/task-form.component';


@NgModule({
  declarations: [
    AppComponent,
    WorkerFormComponent,
    WorkerListComponent,
    MachineListComponent,
    MachineFormComponent,
    JobFormComponent,
    JobListComponent,
    WorkerFormComponent,
    JobListComponent,
    JobFormComponent,
    FreeworkersListComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
