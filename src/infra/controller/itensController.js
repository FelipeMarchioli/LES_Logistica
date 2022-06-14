const itensService = require('../../domain/itensData');

exports.buscarItens = async (req, res) => {
  const idRomaneio = req.query.idRomaneio;
  const itensData = await itensService.getItens(idRomaneio);
  if (!itensData) {
    return res.status(400).json({ message: 'Error', value: 'Não foi encontrado nenhum itens com esse código'})
  }
  console.log(itensData)
  return res.status(200).json({ message: 'Success', value: itensData})
};