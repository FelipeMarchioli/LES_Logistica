const express = require('express');
const usuarioController = require('../infra/controller/usuarioController');

const UsuarioRoute = express.Router();

UsuarioRoute.post('/usuario', async (req, res) => {
  await usuarioController.criarUsuario(req, res);
});

UsuarioRoute.post('/login', async (req, res) => {
  await usuarioController.loginUsuario(req, res);
});

module.exports = UsuarioRoute;