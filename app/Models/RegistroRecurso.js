"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class RegistroRecurso extends Model {
  recurso() {
    return this.belongsTo("App/Models/Recurso");
  }

  usuario() {
    return this.belongsTo("App/Models/Usuario");
  }
}

module.exports = RegistroRecurso;
