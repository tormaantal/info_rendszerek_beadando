import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WorkerService } from '../services/worker.service';
import { Worker } from '../models/Worker';

@Component({
  selector: 'app-freeworkers-list',
  templateUrl: './freeworkers-list.component.html',
  styleUrls: ['./freeworkers-list.component.scss']
})
export class FreeworkersListComponent {

  workers!: Worker[];
  freeworkers: Array<Worker> = [];

  constructor(private router: Router,
    private workerService: WorkerService){ }

  async ngOnInit() {
    this.workers = await this.workerService.loadWorkers();
    for (let index = 0; index < this.workers.length; index++) {
      const element = this.workers[index];
      if(element.status == "szabad"){
        console.log(element);
        this.freeworkers.push(element);
      }
    }
  }  

  navigatoToWorkerForm() {
    this.router.navigate(['/worker-form'])
  };
}
