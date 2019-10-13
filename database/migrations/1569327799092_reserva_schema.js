"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ReservaSchema extends Schema {
  up() {
    this.create("reservas", table => {
      table.increments();
      table.date("data").notNullable();
      table.time("hora").notNullable();
      table
        .integer("usuario_id")
        .references("id")
        .inTable("usuarios")
        .unsigned()
        .onUpdate("cascade")
        .onDelete("cascade");
      table
        .integer("equipamento_id")
        .references("id")
        .inTable("equipamentos")
        .unsigned()
        .onUpdate("cascade")
        .onDelete("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("reservas");
  }
}

module.exports = ReservaSchema;
