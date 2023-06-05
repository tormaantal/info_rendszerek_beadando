import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Worker } from "./Worker";
import { Machine } from "./Machine";
import { Job } from "./Job";
import { machine } from "os";

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @ManyToOne(() => Job, job => job.tasks, {
        eager: true,
        cascade: true
    })
    job: Job;
}