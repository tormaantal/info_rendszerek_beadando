import "reflect-metadata"
import { DataSource } from "typeorm"
import { Machine } from "./src/entity/Machine"
import { Task } from "./src/entity/Task"
import { Job } from "./src/entity/Job"
import { Worker } from "./src/entity/Worker"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "ocs",
    synchronize: true,
    logging: true,
    entities: [Machine, Task, Job, Worker],
    migrations: [],
    subscribers: [],
})
