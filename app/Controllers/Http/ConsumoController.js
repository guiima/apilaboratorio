"use strict";

const Consumo = use("App/Models/Consumo");

class ConsumoController {
  async index() {
    const data = await Consumo.query()
      .with("usuario")
      .with("recurso")
      .fetch();

    return data;
  }

  async store({ request }) {
    const data = request.only([
      "usuario_id",
      "recurso_id",
      "quantidade_consumida"
    ]);

    const consumo = await Consumo.create(data);

    return consumo;
  }

  async show({ params }) {
    const data = await Consumo.query()
      .with("usuario")
      .with("recurso")
      .where("id", params.id)
      .fetch();

    return data;
  }

  async update({ params, request }) {
    const consumo = await Consumo.findOrFail(params.id);
    const data = request.only([
      "usuario_id",
      "recurso_id",
      "quantidade_consumida"
    ]);

    consumo.merge(data);
    await consumo.save();

    return consumo;
  }

  async destroy({ params }) {
    const consumo = await Consumo.findOrFail(params.id);

    await consumo.delete();
  }
}

module.exports = ConsumoController;
