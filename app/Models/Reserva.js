"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Reserva extends Model {
  equipamento() {
    return this.belongsTo("App/Models/Equipamento");
  }

  usuario() {
    return this.belongsTo("App/Models/Usuario");
  }
}

module.exports = Reserva;
