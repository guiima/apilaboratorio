"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Usuario extends Model {
  dano() {
    return this.hasMany("App/Models/Dano");
  }

  reserva() {
    return this.hasMany("App/Models/Reserva");
  }

  Usuario_recurso() {
    return this.hasOne("App/Models/UsuarioRecurso");
  }

  consumo() {
    return this.hasOne("App/Models/Consumo");
  }
}

module.exports = Usuario;
