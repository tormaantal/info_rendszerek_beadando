import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom} from 'rxjs';
import { Machine } from '../models/Machine';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  constructor(private http: HttpClient) { }

  async loadMachines(): Promise<Machine[]> {
    return await lastValueFrom(this.http.get<Machine[]>('api/machines'));
  }

  async getMachine(id: number) {
    return await lastValueFrom(this.http.get<Machine>('api/machines/'+ id));
  }

  async addMachine(machine: Machine) {
    return await lastValueFrom(this.http.post<Machine>('api/machines', machine));
  }

  async deleteMachine(id: number){
    return await lastValueFrom(this.http.delete<Machine>('api/machines/' + id));
  }
}
