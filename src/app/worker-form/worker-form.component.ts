import { Component } from '@angular/core';
import { WorkerService } from '../services/worker.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../models/Task';
import { TaskService } from '../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-worker-form',
  templateUrl: './worker-form.component.html',
  styleUrls: ['./worker-form.component.scss']
})
export class WorkerFormComponent {
  workerForm: FormGroup = this.formBuilder.group({
    id: [],
    name: ['', Validators.required],
    competence: [''],
    wage: [0],
    status: ['', Validators.required],
    task: null,
  });

  successMessage: string = '';
  errorMessage: string = '';
  tasks!: Task[]
  constructor(
    private formBuilder: FormBuilder,
    private workerService: WorkerService,

    private router: Router,
    private activatedRoute: ActivatedRoute,
    private taskService: TaskService,
  ) { }

  get id(){
    return this.workerForm.get('id');
  }

  get name(){
    return this.workerForm.get('name');
  }

  get status(){
    return this.workerForm.get('status');
  }

  async ngOnInit() {
    this.tasks = await this.taskService.getAll(); 
  }

  async createWorker() {
    const worker = this.workerForm.value;
    this.workerService.createWorker(worker)
    this.router.navigateByUrl("/worker-list");
  }

  compareTask(task1: Task, task2: Task): boolean {
    return task1 && task2 && task1.id === task2.id;
  }
}
