"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RegistroVidrariaSchema extends Schema {
  up() {
    this.create("registro_vidrarias", table => {
      table.increments();
      table.decimal("entrada");
      table.decimal("saida");
      table.date("data").notNullable();
      table
        .integer("vidraria_id")
        .unsigned()
        .references("id")
        .inTable("vidrarias")
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
    this.drop("registro_vidrarias");
  }
}

module.exports = RegistroVidrariaSchema;
