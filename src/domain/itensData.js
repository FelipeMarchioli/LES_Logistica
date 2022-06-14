const {QueryFile} = require('pg-promise');
const {join: joinPath} = require('path');
const database = require('../infra/data/database');

// InnerJoin com romaneio
exports.getItens = async(codigo) => {
  try {
    let fullPath = joinPath(__dirname, 'query/buscaItens.sql');

    const query = new QueryFile(fullPath, {minify: true});
    
    return database.any(query, codigo)
  } catch(err) {
    return err;
  }
};

exports.getItensNotaFiscal = async(numero) => {
  try {
    let fullPath = joinPath(__dirname, 'query/buscaItensNota.sql');

    const query = new QueryFile(fullPath, {minify: true});
    
    return database.any(query, numero)
  } catch(err) {
    return err;
  }
};