"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RecursoSchema extends Schema {
  up() {
    this.create("recursos", table => {
      table.increments();
      table.string("tipo").notNullable();
      table
        .string("nomenclatura")
        .notNullable()
        .unique();
      table.decimal("quantidade").notNullable();
      table.decimal("qtd_minima").notNullable();
      table
        .string("numeracao")
        .unsigned()
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("recursos");
  }
}

module.exports = RecursoSchema;
