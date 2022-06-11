const database = require('../infra/data/database');

exports.getRomaneio = async(codigo) => {
  try {
    if (codigo) {
      return await database.oneOrNone('select * from public.romaneio where "codRomaneio" = $1', codigo);
    } else {
    	return await database.manyOrNone('select * from public.romaneio');
    }
  } catch(err) {
    return err;
  }
};

exports.saveRomaneio = async (romaneio) => {
  try {
    return await database.one('insert into public.romaneio ("dataEmissao", "dataCarregamento", "idVeiculo") values ($1, $2, $3) returning *', [ romaneio.dataEmissao, romaneio.dataCarregamento, romaneio.idVeiculo ]);
  } catch(err) {
    return err;
  }
};