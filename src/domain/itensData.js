const database = require('../infra/data/database');

// InnerJoin com romaneio
exports.getItens = async(codigo) => {
  try {
  	return await database.oneOrNone('select * from public.file where codigo = $1', [codigo]);
  } catch(err) {
    return err;
  }
};

exports.saveItens = async (codigo, value) => {
  try {
    return await database.one('insert into public.file (codigo, value) values ($1, $2) returning *', [codigo, value]);
  } catch(err) {
    return err;
  }
};