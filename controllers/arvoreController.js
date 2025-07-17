import { TreeNode } from '../models/TreeNode.js'
import { inverterArvore, jsonParaArvore, arvoreParaJson  } from '../services/arvore.js' 

export function inverterArvoreController (req, res) {
    const json = req.body;
    const arvore = jsonParaArvore(json)
    const arvoreInvertida = inverterArvore(arvore)
    res.json(arvoreParaJson(arvoreInvertida))
}