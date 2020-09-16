import { Request, Response } from 'express';
import knex from '../database/connection';

class EmployeesController {
  async getAll(req: Request, res: Response) {
    const employees = await knex('employees').select('*'); 

    Promise.all(employees.map(employee => {
        return knex('roles')
            .select('name', 'roleId').where('roleId', employee.role)
            .then(role => {
                employee.role = {
                  id: role[0].roleId,
                  name: role[0].name
                };
                return employee;
            });
    })).then(response => {
        res.send(response);
    });
  }

  async getOne(req: Request, res: Response) {
    const { id } = req.params;
    const employee = await knex('employees').where('id', id).first();
    const employeeRole = await knex('roles').where('roleId', employee.role).first();

    if (!employee) {
      return res.status(400).json({ message: 'Role with this ID was not found' });
    }

    employee.role = employeeRole;

    return res.json(employee);
  }

  async create(req: Request, res: Response) {
    const { name, lastName, birthDate, salary, role } = req.body;
    const insertedEmployee = await knex('employees')
      .insert({ name, lastName, birthDate, salary, role});

    const selectedRole = await knex('roles').where('roleId', role).first();

    if (!selectedRole) {
      return res.status(400).json({ message: 'Role with this ID was not found' });
    }

    return res.json({
      id: insertedEmployee[0],
      name,
      lastName,
      birthDate,
      salary,
      selectedRole
    });
  }

  async update(req: Request, res: Response){
    const { id } = req.params;
    const { name, lastName, birthDate, salary, role } = req.body;

    const employee = await knex('employees')
      .where('id', id)
      .update({ name, lastName, birthDate, salary, role });


    if (!employee) {
      return res.status(400).json({ message: 'Employee with this ID was not found' });
    }

    const selectedRole = await knex('roles').where('roleId', role).first();

    if (!selectedRole) {
      return res.status(400).json({ message: 'Role with this ID was not found' });
    }

    return res.json({
      id: employee,
      name,
      lastName,
      birthDate,
      salary,
      selectedRole
    });
  }

  async delete(req: Request, res: Response){
    const { id } = req.params;
    const employee = await knex('employees').where('id', id).del();

    if (!employee) {
      return res.status(400).json({ message: 'Employee with this ID was not found' });
    }

    return res.json({ message: 'Employee Fired!' });

  }
}

export default EmployeesController;
