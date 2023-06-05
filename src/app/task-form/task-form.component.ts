import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { JobService } from '../services/job.service';
import { ActivatedRoute} from '@angular/router';
import { Task } from '../models/Task';
import { Job } from '../models/Job';
import { Machine } from '../models/Machine';
import { MachineService } from '../services/machine.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  allTasks!: Task[];
  tasks: Array<Task> = [];
  machines!: Machine[]
  jobId!: 0
  job!: Job;
  newTaskTitle: string = '';

  constructor(
    private taskService: TaskService,
    private jobService: JobService,
    private activatedRoute: ActivatedRoute,
    private machineService: MachineService
    ) {}

  async ngOnInit() {
    this.machines = await this.machineService.loadMachines();
    this.jobId =  this.activatedRoute.snapshot.queryParams['id'];
    this.job = await this.jobService.getJob(this.jobId);
    this.allTasks = await this.taskService.getAll();
    this.allTasks.forEach((item, index) => {
      if(item.job.id == this.jobId) this.tasks.push(item)
    });
    }

  async createTask() {
    const newTask = await this.taskService.create({
      id: 0,
      title: this.newTaskTitle,
      job: this.job
    });
    this.tasks.push(newTask);
  }

  async deleteTask(id: number){
    await this.taskService.delete(id)
    this.allTasks = await this.taskService.getAll();
    this.tasks = [];
    this.allTasks.forEach((item, index) => {
      if(item.job.id == this.jobId) this.tasks.push(item)
    });
  }
}
