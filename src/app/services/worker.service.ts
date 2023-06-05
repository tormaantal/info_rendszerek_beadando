import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Worker } from '../models/Worker';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor(private http: HttpClient) { }

  async loadWorkers(): Promise<Worker[]> {
    return await lastValueFrom(this.http.get<Worker[]>('api/workers'));
  }

  async getWorker(id: number) {
    return await lastValueFrom(this.http.get<Worker>('api/workers/'+ id));
  }

  async createWorker(worker: Worker) {
    return await lastValueFrom(this.http.post<Worker>('/api/workers', worker));
  }
}
