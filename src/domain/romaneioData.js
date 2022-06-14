const {QueryFile} = require('pg-promise');
const {join: joinPath} = require('path');
const database = require('../infra/data/database');

exports.getRomaneio = async(codigo) => {
  try {
    if (codigo) {
      let fullPath = joinPath(__dirname, 'query/buscaRomaneio.sql');

      const query = new QueryFile(fullPath, {minify: true});
      
      return database.one(query, codigo);
    } else {
    	let fullPath = joinPath(__dirname, 'query/buscaRomaneios.sql');

      const query = new QueryFile(fullPath, {minify: true});
      
      return database.any(query);
    }
  } catch(err) {
    return err;
  }
};

exports.saveRomaneio = async (romaneio) => {
  try {
    return await database.one('insert into public.romaneio ("codromaneio", "dataemissao", "datacarregar", "idveiculo") values ($1, $2, $3, $4) returning *', [ romaneio.codRomaneio, romaneio.dataEmissao, romaneio.dataCarregamento, romaneio.idVeiculo ]);
  } catch(err) {
    return err;
  }
};