import { Component } from '@angular/core';
import { Worker } from '../models/Worker';
import { Router } from '@angular/router';
import { WorkerService } from '../services/worker.service';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.scss']
})
export class WorkerListComponent {
  workers!: Worker[];

  constructor(private router: Router,
    private workerService: WorkerService,
    private taskService: TaskService){ }

  async ngOnInit() {
    this.workers = await this.workerService.loadWorkers();
    for (let index = 0; index < this.workers.length; index++) {
      const element = this.workers[index];
      console.log(this.taskService.getOne(element.task.id))
    }
  }  

  navigatoToWorkerForm() {
    this.router.navigate(['/worker-form'])
  };
}
