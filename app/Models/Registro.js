"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Registro extends Model {
  recurso() {
    return this.belongsTo("App/Models/Recurso");
  }

  vidraria() {
    return this.belongsTo("App/Models/Vidraria");
  }
}

module.exports = Registro;
