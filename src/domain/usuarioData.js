const database = require('../infra/data/database');

exports.getUsuario = async(codigo) => {
  try {
    if (codigo) {
      return await database.oneOrNone('select * from public.romaneio where codUsuario = $1', codigo);
    } else {
    	return await database.manyOrNone('select * from public.romaneio');
    }
  } catch(err) {
    return err;
  }
};

exports.saveUsuario = async (codigo, value) => {
  try {
    return await database.one('insert into public.romaneio (codigo, value) values ($1, $2) returning *', [codigo, value]);
  } catch(err) {
    return err;
  }
};