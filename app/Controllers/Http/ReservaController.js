"use strict";

const Reserva = use("App/Models/Reserva");

class ReservaController {
  async index() {
    const data = await Reserva.query()
      .with("usuario")
      .with("equipamento")
      .fetch();

    return data;
  }

  async store({ request }) {
    const data = request.only(["data", "hora", "usuario_id", "equipamento_id"]);

    const reserva = await Reserva.create(data);

    return reserva;
  }

  async pesquisaData({ request }) {
    const { data } = request.only(["data"]);

    const reserva = await Reserva.query()
      .with("usuario")
      .with("equipamento")
      .where("data", data)
      .fetch();

    return reserva;
  }

  async pesquisaDataHora({ request }) {
    const { data, hora } = request.only(["data", "hora"]);

    const reserva = await Reserva.query()
      .with("usuario")
      .with("equipamento")
      .where("data", data)
      .where("hora", hora)
      .fetch();

    return reserva;
  }

  async show({ params }) {
    const data = await Reserva.query()
      .with("usuario")
      .with("equipamento")
      .where("id", params.id)
      .fetch();

    return data;
  }

  async update({ params, request }) {
    const reserva = await Reserva.findOrFail(params.id);
    const data = request.only(["data", "hora"]);

    reserva.merge(data);
    await reserva.save();

    return reserva;
  }

  async destroy({ params }) {
    const vidraria = await Reserva.findOrFail(params.id);

    await vidraria.delete();
  }
}

module.exports = ReservaController;
