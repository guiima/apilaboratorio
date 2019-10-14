"use strict";

const RegistroRecurso = use("App/Models/RegistroRecurso");

class RegistroRecursoController {
  async index() {
    const data = await RegistroRecurso.all();

    return data;
  }

  async store({ request }) {
    const data = request.only([
      "entrada",
      "saida",
      "data",
      "recurso_id",
      "usuario_id"
    ]);

    const registroRecurso = await RegistroRecurso.create(data);

    return registroRecurso;
  }
}

module.exports = RegistroRecursoController;
