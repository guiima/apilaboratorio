"use strict";

const Route = use("Route");

// Route.resource("users", "UserController").apiOnly();

Route.resource("usuarios", "UsuarioController").apiOnly();

Route.resource("vidrarias", "VidrariaController").apiOnly();

Route.resource("equipamentos", "EquipamentoController").apiOnly();

Route.resource("recursos", "RecursoController").apiOnly();

Route.resource("danos", "DanoController").apiOnly();

Route.resource("reservas", "ReservaController").apiOnly();

Route.resource("usuarios_recursos", "UsuarioRecursoController").apiOnly();

Route.resource("consumos", "ConsumoController").apiOnly();

Route.get("usuariosautorizados", "UsuarioController.autorizado");

Route.get("usuariosnaoautorizados", "UsuarioController.naoAutorizado");

Route.post("usuarioslogin", "UsuarioController.login");

Route.get("recursoscultivo", "RecursoController.meioCultivo");

Route.get("recursosreagente", "RecursoController.reagente");

Route.post("recursonome", "RecursoController.buscaNome");

Route.post("reservadata", "ReservaController.pesquisaData");

Route.post("reservadatahora", "ReservaController.pesquisaDataHora");

Route.resource("registrorecurso", "RegistroRecursoController").apiOnly();

Route.resource("registrovidraria", "RegistroVidrariaController").apiOnly();

Route.post("registrovidrariadata", "RegistroVidrariaController.buscaData");

Route.post(
  "registrovidrariasomaentrada",
  "RegistroVidrariaController.somaEntrada"
);

Route.post("registrovidrariasomasaida", "RegistroVidrariaController.somaSaida");

Route.post("registrorecursodatatipo", "RegistroRecursoController.buscaData");

Route.get("allequip", "EquipamentoController.allEquip");
