const express = require('express');
const app = express();

app.use(express.json());
app.use('/health-check', require('./route/healthRoute'));

app.use('/api/v1/romaneio', require('./route/romaneioRoute'));
app.use('/api/v1/notasFiscais', require('./route/notaFiscalRoute'));
app.use('/api/v1/checklist', require('./route/checklistRoute'));
app.use('/api/v1', require('./route/itensRoute'));
app.use('/api/v1/devolucao', require('./route/devolucaoRoute'))

module.exports = app;