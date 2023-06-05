import { AppDataSource } from "../data-source";
import { Worker } from "../entity/Worker";
import { Controller } from "./base.controller";

export class WorkerController extends Controller {
    repository = AppDataSource.getRepository(Worker);
}