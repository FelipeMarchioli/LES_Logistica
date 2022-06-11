const usuarioData = require('../../domain/usuarioData');

exports.criarUsuario = async (req, res) => {
  const { cpf, rg, setor, email, senha } = req.body;
  if (!cpf || !rg || !setor || !email || !senha) {
    return res.status(422).json({ message: 'Error', value: 'Dados incorretos ou falta de dados enviado na requisição'})
  }
  const response = await usuarioData.saveUsuario();
  if (response) {
    return res.status(400).json({ message: 'Error', value: 'Erro ao criar usuário'})
  }

  return res.status(201).json({ message: 'Success', value: 'Checklist criado com sucesso'})
};

exports.loginUsuario = async (_, res) => {
  const response = await usuarioData.getUsuario();
  if (response) {
    return res.status(400).json({ message: 'Error', value: 'Erro ao criar usuario'})
  }

  return res.status(201).json({ message: 'Success', value: 'Checklist criado com sucesso'})
};