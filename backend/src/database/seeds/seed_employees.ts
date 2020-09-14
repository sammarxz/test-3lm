import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('employees').del();

  // Inserts seed entries
  await knex('employees').insert([
    {
      id: 1,
      name: 'Samuel',
      lastName: 'Marques',
      role: 1,
      birthDate: '05/05/1996',
      salary: 5.255
    }
  ]);
};
