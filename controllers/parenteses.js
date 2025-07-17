import { verificaParenteses } from '../services/parenteses.js'

export function parenteses(req, res) {
    try {
        const sentenca = req.body.sentenca;
        res.status(200).json(verificaParenteses(sentenca))
    } catch {
        res.status(500).json({ mensagem: 'Erro Interno', erro: error.message });
  }
}
