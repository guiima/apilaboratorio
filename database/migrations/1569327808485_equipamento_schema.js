"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class EquipamentoSchema extends Schema {
  up() {
    this.create("equipamentos", table => {
      table.increments();
      table.string("nome").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("equipamentos");
  }
}

module.exports = EquipamentoSchema;
