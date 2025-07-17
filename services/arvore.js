import { TreeNode } from '../models/TreeNode.js'

export function inverterArvore(no) {
    if (!no) return null;

    [no.esquerda, no.direita] = [inverterArvore(no.direita), inverterArvore(no.esquerda)];

    return no;
}

export function imprimirEmOrdem(no, resultado = []) {
    if(!no) return null;
    imprimirEmOrdem(no.esquerda, resultado);
    resultado.push(no.valor);
    imprimirEmOrdem(no.direita, resultado)
}

export function jsonParaArvore(json) {
    if (!json) return null;
    return new TreeNode(json.valor,
        jsonParaArvore(json.esquerda),
        jsonParaArvore(json.direita)
    );
}

export function arvoreParaJson(no) {
    if (!no) return null;
    return {
        valor: no.valor,
        esquerda: arvoreParaJson(no.esquerda),
        direita: arvoreParaJson(no.direita)
    };
}