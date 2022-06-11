const database = require('../infra/data/database');

exports.getChecklist = async(codigo) => {
  try {
  	return await database.oneOrNone('select * from public.file where codigo = $1', [codigo]);
  } catch(err) {
    return err;
  }
};

exports.saveChecklist = async (codigo, value) => {
  try {
    return await database.one('insert into public.file (codigo, value) values ($1, $2) returning *', [codigo, value]);
  } catch(err) {
    return err;
  }
};