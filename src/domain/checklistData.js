const database = require('../infra/data/database');

exports.saveChecklist = async (value) => {
  try {
    return database.one('insert into public.checklist ("idchecklist", "observacoes", "codromaneio") values ($1, $2, $3) returning *', [ value.idChecklist, value.observacoes, value.codRomaneio ])
  } catch(err) {
    return err;
  }
};