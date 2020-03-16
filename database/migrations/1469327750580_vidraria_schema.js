"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class VidrariaSchema extends Schema {
  up() {
    this.create("vidrarias", table => {
      table.increments();
      table.string("nome").notNullable();
      table.integer('quantidade').notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("vidrarias");
  }
}

module.exports = VidrariaSchema;
