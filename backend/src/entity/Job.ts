import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Task } from './Task';

@Entity()
export class Job {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text' })
    title: string;
    
    @OneToMany(type => Task, task => task.job)
    tasks: Task[];
    
}