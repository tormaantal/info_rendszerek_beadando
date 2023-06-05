import { AppDataSource } from "../data-source";
import { Task } from "../entity/Task";
import { Controller } from "./base.controller";

export class TaskController extends Controller {
    repository = AppDataSource.getRepository(Task);
}