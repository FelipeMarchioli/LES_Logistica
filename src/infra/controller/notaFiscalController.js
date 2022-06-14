const notaFiscalData = require('../../domain/notaFiscalData');

exports.buscaNotasFiscais = async (_, res) => {
  const notasFiscaisData = await notaFiscalData.getNotasFiscais();
  if (!notasFiscaisData) {
    return res.status(400).json({ message: 'Error', value: 'Não foi encontrado nenhum notas fiscais com esse código'})
  }

  return res.status(200).json({ message: 'Success', value: notasFiscaisData})
};