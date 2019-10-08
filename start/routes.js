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
