import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MachineService } from '../services/machine.service';
import { ActivatedRoute, Router } from '@angular/router';

import { TaskService } from '../services/task.service';
import { Task } from '../models/Task';

@Component({
  selector: 'app-machine-form',
  templateUrl: './machine-form.component.html',
  styleUrls: ['./machine-form.component.scss']
})
export class MachineFormComponent {
  machineForm: FormGroup = this.fb.group({
    id: [],
    title:['', Validators.required],
    task:[null]
  })

  errorMessage: string = ''
  tasks!: Task[]
  constructor(
    private machineService: MachineService,
    private fb: FormBuilder,
    private router: Router,

    private activatedRoute: ActivatedRoute,
    private taskService: TaskService
  ) {}

  get id(){
    return this.machineForm.get('id');
  }

  get title(){
    return this.machineForm.get('title');
  }

  get task(){
    return this.machineForm.get('tasks');
  }

  async ngOnInit() {
    this.tasks = await this.taskService.getAll();

    const id = this.activatedRoute.snapshot.queryParams['id'];

    if(id){
      const machine = await this.machineService.getMachine(id);
      this.machineForm.setValue(machine);
    }
  }

  async addMachine() {
    this.machineService.addMachine(this.machineForm.value)
    this.router.navigateByUrl("/");
  }

  compareTask(task1: Task, task2: Task): boolean {
    return task1 && task2 && task1.id === task2.id;
  }
}
