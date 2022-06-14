const {QueryFile} = require('pg-promise');
const {join: joinPath} = require('path');
const database = require('../infra/data/database');

// InnerJoin com romaneio
exports.getItens = async(codigo) => {
  try {
    let fullPath = joinPath(__dirname, 'query/searchItens.sql');

    const query = new QueryFile(fullPath, {minify: true});
    
    return database.any(query, codigo)
  } catch(err) {
    return err;
  }
};