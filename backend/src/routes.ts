import express from 'express';
import { JobController } from './controller/job.controller';
import { MachineController } from './controller/machine.controller';
import { TaskController } from './controller/task.controller';
import { WorkerController } from './controller/worker.controller';

export function getRoutes() {
    const router = express.Router();

    const workerController = new WorkerController();
    const jobController = new JobController(); 
    const machineController = new MachineController();
    const taskController = new TaskController();



    router.get('/workers', workerController.getAll);
    router.get('/workers/:id', workerController.getOne);
    router.post('/workers', workerController.create);
    router.put('/workers', workerController.update);
    router.delete('/workers/:id', workerController.delete);

    router.get('/jobs', jobController.getAll);
    router.get('/jobs/:id', jobController.getOne);
    router.post('/jobs', jobController.create);
    router.put('/jobs', jobController.update);
    router.delete('/jobs/:id', jobController.delete);

    router.get('/machines', machineController.getAll);
    router.get('/machines/:id', machineController.getOne);
    router.post('/machines', machineController.create);
    router.put('/machines', machineController.update);
    router.delete('/machines/:id', machineController.delete);

    router.get('/tasks', taskController.getAll);
    router.get('/tasks/:id', taskController.getOne);
    router.post('/tasks', taskController.create);
    router.put('/tasks', taskController.update);
    router.delete('/tasks/:id', taskController.delete);


    return router;
}
