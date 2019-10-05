"use strict";

const Recurso = use("App/Models/Recurso");

class RecursoController {
  async index() {
    const data = await Recurso.all();

    return data;
  }

  async store({ request }) {
    const data = request.only([
      "tipo",
      "nomenclatura",
      "quantidade",
      "numeracao"
    ]);

    const recurso = await Recurso.create(data);

    return recurso;
  }

  async show({ params }) {
    const data = await Recurso.findOrFail(params.id);

    return data;
  }

  async update({ params, request }) {
    const recurso = await Recurso.findOrFail(params.id);
    const data = request.only([
      "tipo",
      "nomenclatura",
      "quantidade",
      "numeracao"
    ]);

    recurso.merge(data);
    await recurso.save();

    return recurso;
  }

  async destroy({ params }) {
    const recurso = await Recurso.findOrFail(params.id);

    await recurso.delete();
  }
}

module.exports = RecursoController;
