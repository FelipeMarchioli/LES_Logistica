const itensService = require('../../domain/itensData');

exports.buscarItens = async (req, res) => {
  const codRomaneio = req.query.codRomaneio;
  const itensData = await itensService.getItens(codRomaneio);
  if (!itensData) {
    return res.status(400).json({ message: 'Error', value: 'Não foi encontrado nenhum itens com esse código'})
  }
  console.log(itensData)
  return res.status(200).json({ message: 'Success', value: itensData})
};

exports.buscarItensNotaFiscal = async (req, res) => {
  const numero = req.query.numero;
  const itensData = await itensService.getItensNotaFiscal(numero);
  if (!itensData) {
    return res.status(400).json({ message: 'Error', value: 'Não foi encontrado nenhum itens com esse código'})
  }
  console.log(itensData)
  return res.status(200).json({ message: 'Success', value: itensData})
};