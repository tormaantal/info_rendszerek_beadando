import { Job } from "./Job";

export interface Task{
    id: number;
    title: string;
    job: Job
}