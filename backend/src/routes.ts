import express from 'express';

import RolesController from './controllers/RolesController';
import EmployeesController from './controllers/EmployeesController';

const routes = express.Router();
const rolesController = new RolesController();
const employeesController = new EmployeesController();

// Roles Routes
routes.get('/roles', rolesController.getAll);
routes.get('/roles/:id', rolesController.getOne);
routes.post('/roles', rolesController.create);
routes.put('/roles/:id', rolesController.update);
routes.delete('/roles/:id', rolesController.delete);

// Employee Routes
routes.get('/employees', employeesController.getAll);
routes.get('/employees/:id', employeesController.getOne);
routes.post('/employees', employeesController.create);
routes.put('/employees/:id', employeesController.update);
routes.delete('/employees/:id', employeesController.delete);

export default routes;
