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

exports.getItem = async(conferencia) => {
  try {
    if (conferencia) {
      let fullPath = joinPath(__dirname, 'query/buscaItem.sql');

      const query = new QueryFile(fullPath, {minify: true});
      
      return database.one(query, [conferencia.idItemNotaFiscal, conferencia.idNotaFiscal]);
    } else {
    	let fullPath = joinPath(__dirname, 'query/buscaItem.sql');

      const query = new QueryFile(fullPath, {minify: true});
      
      return database.any(query);
    }
  } catch(err) {
    return err;
  }
};

exports.updateItem = async (conferencia) => {
  try {
    console.log(conferencia)
    return await database.one('update public.itemnotafiscal set "iditemnotafiscal" = $1, "codproduto" = $2, "quantidade" = $3, "numeroitem" = $4, "sequencia" = $5, "quantidadecarregada" = $6, "lote" = $7, "idnotafiscal" = $8 where "iditemnotafiscal" = $1 and "idnotafiscal" = $8 returning *', [ conferencia.iditemnotafiscal, conferencia.codproduto, conferencia.quantidade, conferencia.numeroitem, conferencia.sequencia, conferencia.quantidadecarregada, conferencia.lote, conferencia.idnotafiscal ]);
  } catch(err) {
    return err;
  }
};