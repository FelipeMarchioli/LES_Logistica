const express = require('express');
const itensController = require('../infra/controller/itensController');

const ItensRoute = express.Router();

ItensRoute.get('/itensRomaneio', async (req, res) => {
  await itensController.buscarItens(req, res);
});

ItensRoute.get('/itensNotaFiscal', async (req, res) => {
  await itensController.buscarItensNotaFiscal(req, res);
});

ItensRoute.put('/enviaRomaneio', async (req, res) => {
  await itensController.enviarRomaneio(req, res);
});

module.exports = ItensRoute;