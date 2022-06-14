const devolucaoData = require('../../domain/devolucaoData');
const itensData = require('../../domain/itensData');

exports.criarDevolucao = async (req, res) => {
  const devolucao = req.body;
  if (!devolucao.iditemnotafiscal || !devolucao.quantidadedevolvida || !devolucao.idnotafiscal) {
    return res.status(422).json({ message: 'Error', value: 'Dados incorretos ou falta de dados enviado na requisição'})
  }
  
  const itemData = await itensData.getItem(devolucao);
  if (!itemData) {
    return res.status(400).json({ message: 'Error', value: 'Não foi encontrado nenhum item com esse código'});
  }

  if (itemData.quantidadecarregada < devolucao.quantidadedevolvida) {
    return res.status(500).json({ message: 'Error', value: 'Quantidade devolvida não pode ser maior do que a quantidade carregada'});
  }

  const response = await devolucaoData.saveDevolucao(devolucao);
  if (response.name === 'error') {
    return res.status(400).json({ message: 'Error', value: response})
  }

  return res.status(200).json({ message: 'Success', value: response});
};