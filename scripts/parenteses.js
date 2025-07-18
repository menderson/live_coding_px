import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function verificaParenteses(sentenca) {
    const vetorParenteses = sentenca.split('');
    let pilha = 0;

    for (const char of vetorParenteses) {
        if (char === '(') {
            pilha += 1;
        } else if (char === ')') {
            pilha -= 1;
            if (pilha < 0) {
                rl.close();
                return false;
            }
        }
    }
    return pilha === 0 ? true : false;
}

export function parenteses() {
    rl.question('Digite uma expressão com parenteses:', (sentenca) => {
        const resultado = verificaParenteses(sentenca);
        if (resultado) {
            console.log('A expressão está correta.');
        } else {
            console.log('A expressão está incorreta.');
        }
        rl.close();
    })
}