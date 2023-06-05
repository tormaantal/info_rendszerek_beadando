import { Component } from '@angular/core';
import { Machine } from '../models/Machine';
import { Router } from '@angular/router';
import { MachineService } from '../services/machine.service';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-machine-list',
  templateUrl: './machine-list.component.html',
  styleUrls: ['./machine-list.component.scss']
})
export class MachineListComponent {
  machines: Array<Machine> = [];

  constructor(private router: Router,
    private machineService: MachineService,
    private taskService: TaskService) { }

  async ngOnInit() {
    this.machines = await this.machineService.loadMachines();
  }

  navigateToMachineForm() {
    this.router.navigate([ '/machine-form' ]);
  }

  async deleteMachine(id: number) {
    await this.machineService.deleteMachine(id);
  }
}
