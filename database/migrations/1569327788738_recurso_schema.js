"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RecursoSchema extends Schema {
  up() {
    this.create("recursos", table => {
      table.increments();
      table.string("tipo").notNullable();
      table.string("nomenclatura").notNullable();
      table.decimal("quantidade").notNullable();
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
