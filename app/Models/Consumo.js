"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Consumo extends Model {
  usuario() {
    return this.belongsTo("App/Models/Usuario");
  }

  recurso() {
    return this.belongsTo("App/Models/Recurso");
  }
}

module.exports = Consumo;
