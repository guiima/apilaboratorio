"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ConsumoSchema extends Schema {
  up() {
    this.create("consumos", table => {
      table.increments();
      table
        .integer("usuario_id")
        .unsigned()
        .references("id")
        .inTable("usuarios")
        .onUpdate("cascade")
        .onDelete("SET NULL");
      table
        .integer("recurso_id")
        .unsigned()
        .references("id")
        .inTable("recursos")
        .onUpdate("cascade")
        .onDelete("cascade");
      table.decimal("quantidade_consumida").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("consumos");
  }
}

module.exports = ConsumoSchema;
