"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class RegistroVidraria extends Model {
  vidraria() {
    return this.belongsTo("App/Models/Vidraria");
  }

  usuario() {
    return this.belongsTo("App/Models/Usuario");
  }
}

module.exports = RegistroVidraria;
