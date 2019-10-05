"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Equipamento extends Model {
  reserva() {
    return this.hasOne("App/Models/Reserva");
  }
}

module.exports = Equipamento;
