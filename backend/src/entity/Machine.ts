import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Task } from "./Task";

@Entity()
export class Machine {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @OneToOne(() => Task)
    @JoinColumn()
    task: Task;
}