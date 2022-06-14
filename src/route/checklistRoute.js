const express = require('express');
const checklistController = require('../infra/controller/checklistController');

const ChecklistRoute = express.Router();

ChecklistRoute.get('', async (req, res) => {
  await checklistController.buscarChecklist(req, res);
});

ChecklistRoute.post('', async (req, res) => {
  await checklistController.criarChecklist(req, res);
});

module.exports = ChecklistRoute;