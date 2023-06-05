import { AppDataSource } from "../data-source";
import { Job } from "../entity/Job";
import { Controller } from "./base.controller";

export class JobController extends Controller {
    repository = AppDataSource.getRepository(Job);
}