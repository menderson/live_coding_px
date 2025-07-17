export function verificaParenteses (sentenca) {
    const vetorParenteses = sentenca.split('');
    let pilha = 0

    for (const char of vetorParenteses) {
        if (char === '('){
            pilha += 1
        }
        else if (char === ')'){
            pilha -= 1;
            if (pilha < 0) return false;
        }
    }

    return pilha === 0 ? true : false;
}