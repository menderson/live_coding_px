import { Operacao } from '../models/operacao.js'


const chaves = new Map()

chaves.set('cargo_type', [
        {
        'regra': ['cargo_type'],
        'limitante': ['igual'],
        'valor_alvo': ['Produtos Químicos Perigosos'],
        'aumento': 2
        },
        {
        'regra': ['cargo_type', 'total_distancy_km'],
        'limitante': ['igual', 'maior'],
        'valor_alvo': ['Alimentos Perecíveis', 300],
        'aumento': 1
        },
    ]
)


export function avaliacao_de_risco (Operacao) {
    const risco = 0
    const lista_de_motivos = []
    
    chaves.forEach(chave => {
        chave.forEach(regra => {
            let aumentar = false
            regra.forEach((elemento, index) => {
                if (limitante[index] = 'igual') {
                    if (Operacao[regra[index]] = valor_alvo[index]) {
                        aumentar = true;
                    }
                }
                if (limitante[index] = 'maior') {
                    if (Operacao[regra[index]] > valor_alvo[index]) {
                        aumentar = true;
                    }
                }


            })
            if (aumentar = true)
                risco += regra.aumento
            
        })
    })
}