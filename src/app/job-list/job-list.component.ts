import { Component } from '@angular/core';
import { Job } from '../models/Job';
import { Router } from '@angular/router';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent {
  jobs!: Job[];

  constructor(private router: Router,
    private jobService: JobService) { }

  async ngOnInit() {
    this.jobs = await this.jobService.getAll()
  }

  navigateToJobForm() {
    this.router.navigate([ '/job-form' ]);
  }

  navigateToEditTask(id: number) {
    this.router.navigate([ '/task-form' ], {
      queryParams: {
        id: id        
      }
    });
  }
}
