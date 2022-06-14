const database = require('../infra/data/database');

exports.saveDevolucao = async (devolucao) => {
  try {
    return await database.one('insert into public.devolucao ("motivo", "iditemnotafiscal", "qtddevolvida", "idnotafiscal") values ($1, $2, $3, $4) returning *', [ devolucao.motivo, devolucao.iditemnotafiscal, devolucao.quantidadedevolvida, devolucao.idnotafiscal ]);
  } catch(err) {
    return err;
  }
};