class Livro {
  constructor(titulo, autor, ano) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
    this.disponivel = true;
  }
}

class Usuario {
  constructor(nome) {
    this.nome = nome;
    this.livrosEmprestados = [];
  }
}

class Biblioteca {
  constructor() {
    this.livrosDisponiveis = [];
    this.usuarios = new Map();
  }

  adicionarLivro(livro) {
    this.livrosDisponiveis.push(livro);
  }

  cadastrarUsuario(nome) {
    if (!this.usuarios.has(nome)) {
      this.usuarios.set(nome, new Usuario(nome));
    }
  }

  listarLivrosDisponiveis() {
    console.log("Livros disponíveis:");
    this.livrosDisponiveis.forEach(livro => {
      if (livro.disponivel) {
        console.log(`- ${livro.titulo} (${livro.ano}) por ${livro.autor}`);
      }
    });
  }

  emprestarLivro(titulo, nomeUsuario) {
    const usuario = this.usuarios.get(nomeUsuario);
    const livro = this.livrosDisponiveis.find(l => l.titulo === titulo && l.disponivel);

    if (!usuario) {
      console.log("Usuário não encontrado.");
      return;
    }

    if (!livro) {
      console.log("Livro não disponível.");
      return;
    }

    livro.disponivel = false;
    usuario.livrosEmprestados.push(livro);
    console.log(`Livro '${titulo}' emprestado para ${nomeUsuario}.`);
  }

  devolverLivro(titulo, nomeUsuario) {
    const usuario = this.usuarios.get(nomeUsuario);

    if (!usuario) {
      console.log("Usuário não encontrado.");
      return;
    }

    const index = usuario.livrosEmprestados.findIndex(l => l.titulo === titulo);

    if (index === -1) {
      console.log("Livro não estava emprestado por este usuário.");
      return;
    }

    const livro = usuario.livrosEmprestados.splice(index, 1)[0];
    livro.disponivel = true;
    console.log(`Livro '${titulo}' devolvido por ${nomeUsuario}.`);
  }

  listarLivrosEmprestados(nomeUsuario) {
    const usuario = this.usuarios.get(nomeUsuario);

    if (!usuario) {
      console.log("Usuário não encontrado.");
      return;
    }

    console.log(`Livros emprestados de ${nomeUsuario}:`);
    usuario.livrosEmprestados.forEach(livro =>
      console.log(`- ${livro.titulo} (${livro.ano})`)
    );
  }
}

export function biblioteca() {
    // Exemplo de uso
    const biblioteca = new Biblioteca();

    biblioteca.adicionarLivro(new Livro("1984", "George Orwell", 1949));
    biblioteca.adicionarLivro(new Livro("Dom Casmurro", "Machado de Assis", 1899));
    biblioteca.adicionarLivro(new Livro("O Hobbit", "J.R.R. Tolkien", 1937));

    biblioteca.cadastrarUsuario("Alice");
    biblioteca.cadastrarUsuario("Bob");

    biblioteca.listarLivrosDisponiveis();
    biblioteca.emprestarLivro("1984", "Alice");
    biblioteca.emprestarLivro("O Hobbit", "Bob");

    biblioteca.listarLivrosEmprestados("Alice");
    biblioteca.devolverLivro("1984", "Alice");

    biblioteca.listarLivrosDisponiveis();
}