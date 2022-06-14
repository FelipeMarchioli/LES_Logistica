const express = require('express');
const notaFiscalController = require('../infra/controller/notaFiscalController');

const NotaFiscalRoute = express.Router();

NotaFiscalRoute.get('', async (req, res) => {
  await notaFiscalController.buscaNotasFiscais(req, res);
});

module.exports = NotaFiscalRoute;