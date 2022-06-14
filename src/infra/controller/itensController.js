const itensData = require('../../domain/itensData');

exports.buscarItens = async (req, res) => {
  const codRomaneio = req.query.codRomaneio;
  const itemData = await itensData.getItens(codRomaneio);
  if (!itemData) {
    return res.status(400).json({ message: 'Error', value: 'Não foi encontrado nenhum item com esse código'})
  }
  return res.status(200).json({ message: 'Success', value: itemData})
};

exports.buscarItensNotaFiscal = async (req, res) => {
  const numero = req.query.numero;
  const itemData = await itensData.getItensNotaFiscal(numero);
  if (!itemData) {
    return res.status(400).json({ message: 'Error', value: 'Não foi encontrado nenhum item com esse código'})
  }
  return res.status(200).json({ message: 'Success', value: itemData})
};

exports.enviarRomaneio = async (req, res) => {
  const conferencia = req.body;
  if (!conferencia.idItemNotaFiscal || !conferencia.quantidade || !conferencia.lote || !conferencia.idNotaFiscal) {
    return res.status(422).json({ message: 'Error', value: 'Dados incorretos ou falta de dados enviado na requisição'})
  }
  
  let itemData = await itensData.getItem(conferencia);
  if (!itemData) {
    return res.status(400).json({ message: 'Error', value: 'Não foi encontrado nenhum item com esse código'});
  }
  itemData.quantidadecarregada = conferencia.quantidade;
  itemData.lote = conferencia.lote
  itemData = await itensData.updateItem(itemData);

  return res.status(200).json({ message: 'Success', value: itemData});
};