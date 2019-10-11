"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RecursoSchema extends Schema {
  up() {
    this.create("recursos", table => {
      table.increments();
      table.string("tipo").notNullable();
      table.string("nomenclatura").notNullable().unique();
      table.decimal("quantidade").notNullable();
      table.decimal("qtd_minima").notNullable();
      table
        .integer("numeracao")
        .unsigned()
        .notNullable()
        .unique();
      table.timestamps();
    });
  }

  down() {
    this.drop("recursos");
  }
}

module.exports = RecursoSchema;
