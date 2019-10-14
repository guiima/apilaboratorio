"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RegistroRecursoSchema extends Schema {
  up() {
    this.create("registro_recursos", table => {
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
        .integer("usuario_id")
        .unsigned()
        .references("id")
        .inTable("usuarios")
        .onUpdate("cascade")
        .onDelete("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("registro_recursos");
  }
}

module.exports = RegistroRecursoSchema;
