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

    const registroRecurso = await RegistroVidraria.create(data);

    return registroRecurso;
  }
}

module.exports = RegistroVidrariaController;
