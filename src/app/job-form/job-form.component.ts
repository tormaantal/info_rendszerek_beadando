import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../models/Task';
import { JobService } from '../services/job.service';
import { ActivatedRoute, Router  } from '@angular/router';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})
export class JobFormComponent {
  jobForm: FormGroup = this.fb.group({
    id: [],
    title: ['', Validators.required],
    tasks:[null]
  })

  errorMessage: string = ''
  tasks: Array<Task> = []
  constructor(
    private jobService: JobService,
    private fb: FormBuilder,
    private router: Router,
    private taskService: TaskService
  ) {}

  get id(){
    return this.jobForm.get('id');
  }

  get title(){
    return this.jobForm.get('title');
  }

  get task(){
    return this.jobForm.get('task');
  }

  async ngOnInit() {
    this.tasks = await this.taskService.getAll();
  }

  async addJob() {
    this.jobService.addJob(this.jobForm.value);
    this.router.navigateByUrl("/job-list");
  }

  compareTask(task1: Task, task2: Task): boolean {
    return task1 && task2 && task1.id === task2.id;
  }
}
