import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Banco de dados em memória
const clientes = new Map();
let idCounter = 1;

export function cadastroClientes() {
  console.log('\n--- MENU ---');
  console.log('1 - Cadastrar novo cliente');
  console.log('2 - Listar clientes');
  console.log('0 - Sair');
  rl.question('Escolha uma opção: ', tratarOpcao);
}

function tratarOpcao(opcao) {
  switch (opcao.trim()) {
    case '1':
      cadastrarCliente();
      break;
    case '2':
      listarClientes();
      break;
    case '0':
      console.log('Saindo...');
      rl.close();
      process.exit();
    default:
      console.log('❌ Opção inválida.');
      cadastroClientes();
  }
}

function cadastrarCliente() {
  rl.question('Nome do cliente: ', (nome) => {
    rl.question('Email do cliente: ', (email) => {
      const id = idCounter++;
      clientes.set(id, { id, nome, email });

      console.log(`✅ Cliente ${nome} cadastrado com ID ${id}`);
      cadastroClientes();
    });
  });
}

function listarClientes() {
  if (clientes.size === 0) {
    console.log('📭 Nenhum cliente cadastrado ainda.');
  } else {
    console.log('\n📋 Lista de Clientes:');
    for (const [id, cliente] of clientes) {
      console.log(`ID ${id}: ${cliente.nome} - ${cliente.email}`);
    }
  }
  cadastroClientes();
}