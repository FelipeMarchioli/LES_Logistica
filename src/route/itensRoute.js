const express = require('express');
const itensController = require('../infra/controller/itensController');

const ItensRoute = express.Router();

ItensRoute.get('/itens', async (req, res) => {
  await itensController.buscarItens(req, res);
});

ItensRoute.post('/itens', async (req, res) => {
  await itensController.criarItens(req, res);
});

module.exports = ItensRoute;