import { Request, Response } from 'express';
import knex from '../database/connection';

class RolesController {
  async getAll(req: Request, res: Response) {
    const roles = await knex('roles').select('*');

    return res.json(roles);
  }

  async getOne(req: Request, res: Response) {
    const { id } = req.params;
    const role = await knex('roles').where('roleId', id).first();

    if (!role) {
      return res.status(400).json({ message: 'Role with this ID was not found' });
    }

    return res.json(role);
  }

  async create(req: Request, res: Response) {
    const { name, description } = req.body;
    const insertedRole = await knex('roles').insert({ name, description });

    return res.json({
      roleId: insertedRole[0],
      name,
      description
    });
  }

  async update(req: Request, res: Response){
    const { id } = req.params;
    const { name, description } = req.body;

    const role = await knex('roles')
      .where('roleId', id)
      .update({ name, description });


    if (!role) {
      return res.status(400).json({ message: 'Role with this ID was not found' });
    }

    return res.json({
      roleId: role,
      name,
      description
    });
  }

  async delete(req: Request, res: Response){
    const { id } = req.params;
    const role = await knex('roles').where('roleId', id).del();

    if (!role) {
      return res.status(400).json({ message: 'Role with this ID was not found' });
    }

    return res.json({ message: 'Role Deleted' });

  }
}

export default RolesController;
