const express = require('express');
const app = express();

app.use(express.json());
app.use('/health-check', require('./route/healthRoute'));

app.use('/api/v1/romaneio', require('./route/romaneioRoute'));
app.use('/api/v1', require('./route/usuarioRoute'));
app.use('/api/v1/checklist', require('./route/checklistRoute'));
app.use('/api/v1/itensRomaneio', require('./route/itensRoute'));

module.exports = app;