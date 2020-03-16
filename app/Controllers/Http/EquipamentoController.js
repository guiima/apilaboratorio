"use strict";

const Equipamento = use("App/Models/Equipamento");

class EquipamentoController {
  async index() {
    const data = await Equipamento.all();

    return data;
  }

  async store({ request }) {
    const data = request.only(["nome", "disponivel"]);

    const equipamento = await Equipamento.create(data);

    return equipamento;
  }

  async show({ params }) {
    const data = await Equipamento.findOrFail(params.id);

    return data;
  }

  async update({ params, request }) {
    const equipamento = await Equipamento.findOrFail(params.id);
    const data = request.only("nome");

    equipamento.merge(data);
    await equipamento.save();

    return equipamento;
  }

  async destroy({ params }) {
    const equipamento = await Equipamento.findOrFail(params.id);

    await equipamento.delete();
  }
}

module.exports = EquipamentoController;
