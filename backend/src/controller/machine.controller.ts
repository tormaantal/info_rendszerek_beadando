import { AppDataSource } from "../data-source";
import { Machine } from "../entity/Machine";
import { Controller } from "./base.controller";

export class MachineController extends Controller {
    repository = AppDataSource.getRepository(Machine);
}