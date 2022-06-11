const express = require('express');
const checklistController = require('../infra/controller/checklistController');

const ChecklistRoute = express.Router();

ChecklistRoute.get('/checklist', async (req, res) => {
  await checklistController.buscarChecklist(req, res);
});

ChecklistRoute.post('/checklist', async (req, res) => {
  await checklistController.criarChecklist(req, res);
});

module.exports = ChecklistRoute;