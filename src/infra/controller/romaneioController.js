const romaneioService = require('../../domain/romaneioData');

exports.buscarRomaneio = async (req, res) => {
  const codigo = req.query.codigo;

  const romaneioData = await romaneioService.getRomaneio(codigo);
  if (!romaneioData) {
    return res.status(400).json({ message: 'Error', value: 'Não foi encontrado nenhum romaneio com esse código'})
  }

  return res.status(200).json({ message: 'Success', value: romaneioData})
};

exports.criarRomaneio = async (req, res) => {
  const romaneio = req.body
  if (!romaneio.dataEmissao || !romaneio.dataCarregamento || !romaneio.idVeiculo) {
    return res.status(422).json({ message: 'Error', value: 'Dados incorretos ou falta de dados enviado na requisição'})
  }
  if (romaneio.dataEmissao > romaneio.dataCarregamento) {
    return res.status(500).json({ message: 'Error', value: 'Data de carregamento deve ser maior do que a data de emissão'})
  }
  const response = await romaneioService.saveRomaneio(romaneio);
  if (response.name === 'error') {
    return res.status(400).json({ message: 'Error', value: response})
  }

  return res.status(201).json({ message: 'Success', value: response})
};