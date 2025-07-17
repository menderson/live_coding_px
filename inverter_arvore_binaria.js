// Definição simples do nó da árvore
class TreeNode {
  constructor(valor, esquerda = null, direita = null) {
    this.valor = valor;
    this.esquerda = esquerda;
    this.direita = direita;
  }
}

// Função que inverte a árvore binária
export function inverterArvore(no) {
  if (!no) return null;

  // Trocar os filhos esquerdo e direito
  [no.esquerda, no.direita] = [inverterArvore(no.direita), inverterArvore(no.esquerda)];

  return no;
}

// Função para imprimir a árvore em ordem (esquerda, raiz, direita)
function imprimirInOrder(no) {
  if (!no) return;
  imprimirInOrder(no.esquerda);
  process.stdout.write(no.valor + ' ');
  imprimirInOrder(no.direita);
}

// Exemplo de uso
const arvore = new TreeNode(1,
  new TreeNode(2,
    new TreeNode(4),
    new TreeNode(5)
  ),
  new TreeNode(3,
    new TreeNode(6),
    new TreeNode(7)
  )
);

console.log('Árvore original (in-order):');
imprimirInOrder(arvore);
console.log('\nInvertendo a árvore...');
inverterArvore(arvore);
console.log('Árvore invertida (in-order):');
imprimirInOrder(arvore);
console.log()
process.exit(0);
