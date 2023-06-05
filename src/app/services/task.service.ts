import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  async getAll() {
    return  await lastValueFrom(this.http.get<Task[]>('/api/tasks'));
  }

  async getOne(id: number) {
    return await lastValueFrom(this.http.get<Task>('api/tasks/' + id))
  }

  async create(task: Task) {
    return  await lastValueFrom(this.http.post<Task>('/api/tasks', task));
  }

  async delete(id: number) {
    return  await lastValueFrom(this.http.delete('/api/tasks/' + id));
  }
}
