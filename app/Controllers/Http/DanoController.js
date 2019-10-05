"use strict";

const Dano = use("App/Models/Dano");

class DanoController {
  async index() {
    const data = await Dano.query()
      .with("usuario")
      .with("vidraria")
      .fetch();

    return data;
  }

  async store({ request }) {
    const data = request.only(["relatorio_dano", "usuario_id", "vidraria_id"]);

    const dano = await Dano.create(data);

    return dano;
  }

  async show({ params }) {
    const data = await Dano.query()
      .with("usuario")
      .with("vidraria")
      .where("id", params.id)
      .fetch();

    return data;
  }

  async update({ params, request }) {
    const dano = await Dano.findOrFail(params.id);
    const data = request.only("relatorio_dano");

    dano.merge(data);
    await dano.save();

    return dano;
  }

  async destroy({ params }) {
    const dano = await Dano.findOrFail(params.id);

    await dano.delete();
  }
}

module.exports = DanoController;
