import "reflect-metadata"
import { DataSource } from "typeorm"
import { Worker } from "./entity/Worker"
import { Job } from "./entity/Job"
import { Machine } from "./entity/Machine"
import { Task } from "./entity/Task"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "ocs",
    synchronize: true,
    logging: true,
    entities: [Job, Worker, Machine, Task],
    migrations: [],
    subscribers: [],
})
