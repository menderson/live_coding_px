import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export function primeiraPalavraUnica() {
    rl.question('Digite uma frase: ', (frase) => {
        const palavras = frase.split(' ');
        const contagem = new Map();

        for (const palavra of palavras) {
            const palavraNormalizada = palavra.toLowerCase();
            contagem.set(palavraNormalizada, (contagem.get(palavraNormalizada) || 0) + 1);
        }

        const primeiraUnica = palavras.find(palavra => {
            const palavraNormalizada = palavra;
            return contagem.get(palavraNormalizada) === 1;
        });

        if (primeiraUnica) {
            console.log(`A primeira palavra única é: ${primeiraUnica}`);
        } else {
            console.log('Não há palavras únicas na frase.');
        }
        rl.close();
    })
}