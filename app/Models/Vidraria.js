"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Vidraria extends Model {
  dano() {
    return this.hasOne("App/Models/Dano");
  }

  registro() {
    return this.hasMany("App/Models/Registro");
  }
}

module.exports = Vidraria;
