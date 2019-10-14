"use strict";

const RegistroVidraria = use("App/Models/RegistroVidraria");

class RegistroVidrariaController {
  async index() {
    const data = await RegistroVidraria.all();

    return data;
  }

  async store({ request }) {
    const data = request.only([
      "entrada",
      "saida",
      "data",
      "vidraria_id",
      "usuario_id"
    ]);

    const registroVidraria = await RegistroVidraria.create(data);

    return registroVidraria;
  }

  async buscaData({ request }) {
    const { data_inicio, data_final } = request.only([
      "data_inicio",
      "data_final"
    ]);

    const registroVidraria = await RegistroVidraria.query()
      .with("vidraria")
      .with("usuario")
      .where("data", ">=", data_inicio)
      .where("data", "<=", data_final)
      .fetch();

    return registroVidraria;
  }
}

module.exports = RegistroVidrariaController;
