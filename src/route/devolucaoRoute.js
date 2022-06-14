const express = require('express');
const devolucaoController = require('../infra/controller/devolucaoController');

const DevolucaoRoute = express.Router();

DevolucaoRoute.post('', async (req, res) => {
  await devolucaoController.criarDevolucao(req, res);
});

module.exports = DevolucaoRoute;