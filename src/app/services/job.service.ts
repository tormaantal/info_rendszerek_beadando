import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { Job } from "../models/Job";

@Injectable({
    providedIn: 'root'
  })
  export class JobService {
  
    constructor(private http: HttpClient) { }
  
    async getAll(): Promise<Job[]> {
      return await lastValueFrom(this.http.get<Job[]>('/api/jobs'));
    }

    async getJob(id: number) {
      return await lastValueFrom(this.http.get<Job>('/api/jobs/'+ id));
    } 
    
    async addJob(job: Job) {
      return await lastValueFrom(this.http.post<Job>('/api/jobs', job));
    }
  }
  