"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UsuarioSchema extends Schema {
  up() {
    this.create("usuarios", table => {
      table.increments();
      table.string("nome").notNullable();
      table.string("instituicao");
      table.integer("ra").unique();
      table
        .string("email")
        .notNullable()
        .unique();
      table.string("senha").notNullable();
      table.string("curso");
      table.string("tipo").notNullable();
      table.boolean("autorizado").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("usuarios");
  }
}

module.exports = UsuarioSchema;
