"use strict";

const Recurso = use("App/Models/Recurso");

class RecursoController {
  async index() {
    const data = await Recurso.all();

    return data;
  }

  async meioCultivo() {
    const data = await Recurso.query()
      .where("tipo", "meio de cultivo")
      .fetch();

    return data;
  }

  async reagente() {
    const data = await Recurso.query()
      .where("tipo", "reagente")
      .fetch();

    return data;
  }

  async store({ request }) {
    const data = request.only([
      "tipo",
      "nomenclatura",
      "quantidade",
      "qtd_minima",
      "numeracao"
    ]);

    const recurso = await Recurso.create(data);

    return recurso;
  }

  async show({ params }) {
    const data = await Recurso.findOrFail(params.id);

    return data;
  }

  async buscaNome({ request }) {
    const { nomenclatura } = request.only(["nomenclatura"]);

    const data = await Recurso.findByOrFail("nomenclatura", nomenclatura);

    return data;
  }

  async update({ params, request }) {
    const recurso = await Recurso.findOrFail(params.id);
    const data = request.only([
      "tipo",
      "nomenclatura",
      "quantidade",
      "qtd_minima",
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
