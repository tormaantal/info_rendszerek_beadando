import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobFormComponent } from './job-form/job-form.component';
import { MachineFormComponent } from './machine-form/machine-form.component';
import { MachineListComponent } from './machine-list/machine-list.component';
import { JobListComponent } from './job-list/job-list.component';
import { WorkerFormComponent } from './worker-form/worker-form.component';
import { WorkerListComponent } from './worker-list/worker-list.component';
import { FreeworkersListComponent } from './freeworkers-list/freeworkers-list.component';
import { TaskFormComponent } from './task-form/task-form.component';

const routes: Routes = [
  { 
    path: '',
    component: MachineListComponent
  },
  { 
    path: 'machine-form',
    component: MachineFormComponent
  },
  { 
    path: 'worker-list',
    component: WorkerListComponent
  },
  {
    path: 'freeworker-list',
    component: FreeworkersListComponent
  },
  {
    path: 'worker-form',
    component: WorkerFormComponent
  },
  { 
    path: 'job-list',
    component: JobListComponent
  },
  {
    path: 'job-form',
    component: JobFormComponent
  },
  {
    path: 'task-form',
    component: TaskFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
