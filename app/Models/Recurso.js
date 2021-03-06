"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Recurso extends Model {
  Usuario_recurso() {
    return this.hasOne("App/Models/UsuarioRecurso");
  }

  consumo() {
    return this.hasOne("App/Models/Consumo");
  }

  registro_recurso() {
    return this.hasMany("App/Models/RegistroRecurso");
  }
}

module.exports = Recurso;
