const express = require('express');
const romaneioController = require('../infra/controller/romaneioController');

const RomaneioRoute = express.Router();

RomaneioRoute.get('', async (req, res) => {
  await romaneioController.buscarRomaneio(req, res);
});

RomaneioRoute.post('', async (req, res) => {
  await romaneioController.criarRomaneio(req, res);
});

module.exports = RomaneioRoute;