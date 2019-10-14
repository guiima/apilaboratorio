"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RegistroSchema extends Schema {
  up() {
    this.create("registros", table => {
      table.increments();
      table.decimal("entrada");
      table.decimal("saida");
      table.date("data").notNullable();
      table
        .integer("recurso_id")
        .references("id")
        .inTable("recursos")
        .unsigned()
        .onUpdate("cascade")
        .onDelete("cascade");
      table
        .integer("vidraria_id")
        .references("id")
        .inTable("vidrarias")
        .unsigned()
        .onUpdate("cascade")
        .onDelete("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("registros");
  }
}

module.exports = RegistroSchema;
