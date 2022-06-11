const itensService = require('../../domain/itensData');

exports.buscarItens = async (req, res) => {
  const codigo = `{${req.query.codigo}}`;
  const itensData = await itensService.getItens(codigo);
  if (!itensData) {
    return res.status(400).json({ message: 'Error', value: 'Não foi encontrado nenhum itens com esse código'})
  }

  return res.status(200).json({ message: 'Success', value: itensData.value})
};

exports.criarItens = async (_, res) => {
  const response = await itensService.saveItens();
  if (response) {
    return res.status(400).json({ message: 'Error', value: 'Erro ao criar itens'})
  }

  return res.status(201).json({ message: 'Success', value: 'Itens criado com sucesso'})
};