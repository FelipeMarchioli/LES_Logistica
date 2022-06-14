const express = require('express');
const itensController = require('../infra/controller/itensController');

const ItensRoute = express.Router();

ItensRoute.get('', async (req, res) => {
  await itensController.buscarItens(req, res);
});

module.exports = ItensRoute;