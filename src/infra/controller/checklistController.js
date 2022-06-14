const checklistService = require('../../domain/checklistData');

exports.buscarChecklist = async (req, res) => {
  const codigo = `{${req.query.codigo}}`;
  const checklistData = await checklistService.getChecklist(codigo);
  if (!checklistData) {
    return res.status(400).json({ message: 'Error', value: 'Não foi encontrado nenhum checklist com esse código'})
  }

  return res.status(200).json({ message: 'Success', value: checklistData.value})
};

exports.criarChecklist = async (req, res) => {
  const checklist = req.body
  if (!checklist.idChecklist || !checklist.observacoes || !checklist.codRomaneio) {
    return res.status(422).json({ message: 'Error', value: 'Dados incorretos ou falta de dados enviado na requisição'})
  }
  const response = await checklistService.saveChecklist(checklist);
  if (response.name === 'error') {
    return res.status(400).json({ message: 'Error', value: 'Erro ao criar checklist'})
  }

  return res.status(201).json({ message: 'Success', value: response})
};