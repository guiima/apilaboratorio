"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class DanoSchema extends Schema {
  up() {
    this.create("danos", table => {
      table.increments();
      table.text("relatorio_dano").notNullable();
      table
        .integer("usuario_id")
        .unsigned()
        .references("id")
        .inTable("usuarios")
        .onUpdate("cascade")
        .onDelete("cascade");
      table
        .integer("vidraria_id")
        .unsigned()
        .references("id")
        .inTable("vidrarias")
        .onUpdate("cascade")
        .onDelete("cascade");
      table.timestamps();
    });
  }

  down() {
    this.drop("danos");
  }
}

module.exports = DanoSchema;
