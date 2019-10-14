"use strict";

const Registro = use("App/Models/Registro");

class RegistroController {
  async index() {
    const data = await Registro.all();

    return data;
  }

  async store({ request }) {
    const data = request.only([
      "entrada",
      "saida",
      "data",
      "recurso_id",
      "vidraria_id"
    ]);

    const registro = await Registro.create(data);

    return registro;
  }

  async show({ params }) {
    const data = await Registro.findOrFail(params.id);

    return data;
  }
}

module.exports = RegistroController;
