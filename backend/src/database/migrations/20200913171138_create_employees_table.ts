import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('employees', function(table) {
    table.increments('id');
    table.string('name').notNullable();
    table.string('lastName').notNullable();
    table.integer('role').unsigned().notNullable();
    table.string('birthDate').notNullable();
    table.float('salary').notNullable();

    table.foreign('role')
      .references('roleId')
      .inTable('roles');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('employees');
}
