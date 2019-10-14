"use strict";

const Vidraria = use("App/Models/Vidraria");

class VidrariaController {
  async index() {
    const data = await Vidraria.all();

    return data;
  }

  async store({ request }) {
    const data = request.only(["nome", "quantidade"]);

    const vidraria = await Vidraria.create(data);

    return vidraria;
  }

  async show({ params }) {
    const data = await Vidraria.findOrFail(params.id);

    return data;
  }

  async update({ params, request }) {
    const vidraria = await Vidraria.findOrFail(params.id);
    const data = request.only("nome");

    vidraria.merge(data);
    await vidraria.save();

    return vidraria;
  }

  async destroy({ params }) {
    const vidraria = await Vidraria.findOrFail(params.id);

    await vidraria.delete();
  }
}

module.exports = VidrariaController;
