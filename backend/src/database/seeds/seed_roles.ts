import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('roles').del();

  // Inserts seed entries
  await knex('roles').insert([
    { roleId: 1, name: 'CEO', description: 'The Boss' },
    { roleId: 2, name: 'CTO', description: 'The Tech Boss' },
  ]);
};
