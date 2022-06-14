const {QueryFile} = require('pg-promise');
const {join: joinPath} = require('path');
const database = require('../infra/data/database');

exports.getNotasFiscais = async() => {
  try {
    let fullPath = joinPath(__dirname, 'query/buscaNotas.sql');

    const query = new QueryFile(fullPath, {minify: true});
    
    return database.any(query)
  } catch(err) {
    return err;
  }
};