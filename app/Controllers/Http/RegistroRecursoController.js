"use strict";

const RegistroRecurso = use("App/Models/RegistroRecurso");

class RegistroRecursoController {
  async index() {
    const data = await RegistroRecurso.query()
      .with("recurso")
      .with("usuario")
      .fetch();

    return data;
  }

  async buscaData({ request }) {
    const { data_inicio, data_final, tipo } = request.only([
      "data_inicio",
      "data_final",
      "tipo"
    ]);

    const registroRecurso = await RegistroRecurso.query()
      .with("recurso", recurso => {
        recurso.where("tipo", tipo);
      })
      .with("recurso")
      .with("usuario")
      .whereBetween("data", [data_inicio, data_final])
      .fetch();

    return registroRecurso;
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
