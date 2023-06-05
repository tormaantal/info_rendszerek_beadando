import { Task } from "./Task";

export interface Worker{
    id: string;
    name: string;
    competence: string;
    wage: number;
    status: string;
    task: Task;
}