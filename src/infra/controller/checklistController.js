const checklistService = require('../../domain/checklistData');

exports.buscarChecklist = async (req, res) => {
  const codigo = `{${req.query.codigo}}`;
  const checklistData = await checklistService.getChecklist(codigo);
  if (!checklistData) {
    return res.status(400).json({ message: 'Error', value: 'Não foi encontrado nenhum checklist com esse código'})
  }

  return res.status(200).json({ message: 'Success', value: checklistData.value})
};

exports.criarChecklist = async (_, res) => {
  const response = await checklistService.saveChecklist();
  if (response) {
    return res.status(400).json({ message: 'Error', value: 'Erro ao criar checklist'})
  }

  return res.status(201).json({ message: 'Success', value: 'Checklist criado com sucesso'})
};