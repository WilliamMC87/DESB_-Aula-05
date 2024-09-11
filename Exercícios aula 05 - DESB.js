// exercicios.js

// --- Exercício 1 ---
console.log('--- Exercício 1 ---');

let array = [1, 2, 3, 4, 5];
console.log('Antes da alteração:', array);

// Atribuindo um novo valor para o índice 0
array[0] = 10;
console.log('Depois da alteração:', array);

// --- Exercício 2 ---
console.log('--- Exercício 2 ---');

let meuArray = [];
meuArray.push(5, 10, 15);
console.log('Array após adicionar os números:', meuArray);

// Substituindo o primeiro elemento pelo dobro do seu valor atual
meuArray[0] = meuArray[0] * 2;
console.log('Array após alterar o primeiro elemento:', meuArray);

// --- Exercício 3 ---
console.log('--- Exercício 3 ---');

let array3 = [];
array3.push(1, 2, 3);
console.log('Array resultante:', array3);

// --- Exercício 4 ---
console.log('--- Exercício 4 ---');

let clinica = [];

// Adicionando animais à lista
clinica.push('Cachorro', 'Gato', 'Coelho');
console.log('Animais na clínica:', clinica);

// Removendo animais da lista
while (clinica.length > 0) {
  let animal = clinica.shift();
  console.log('Animal removido:', animal);
}

console.log('Lista final de animais:', clinica);

// --- Exercício 5 ---
console.log('--- Exercício 5 ---');

const livro = {
  titulo: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien",
  anoPublicacao: 1954,
  genero: "Fantasia"
};

console.log('Detalhes do livro:', livro);

// --- Exercício 6 ---
console.log('--- Exercício 6 ---');

const anoAtual = new Date().getFullYear();
const livro6 = {
  titulo: "O Hobbit",
  autor: "J.R.R. Tolkien",
  anoPublicacao: 1937,
  genero: "Fantasia",
  idadePublicacao: anoAtual - 1937
};

const mostrarDetalhes = `Título: ${livro6.titulo}, Autor: ${livro6.autor}, Ano de Publicação: ${livro6.anoPublicacao}, Gênero: ${livro6.genero}, Idade da Publicação: ${livro6.idadePublicacao} anos`;

console.log(mostrarDetalhes);

// --- Exercício 7 ---
console.log('--- Exercício 7 ---');

const livro7 = {
  titulo: "1984",
  autor: "George Orwell",
  anoPublicacao: 1949,
  genero: "Distopia",
  idadePublicacao: 2024 - 1949
};

console.log('Título:', livro7['titulo']);
console.log('Autor:', livro7['autor']);
console.log('Ano de Publicação:', livro7['anoPublicacao']);
console.log('Gênero:', livro7['genero']);
console.log('Idade de Publicação:', livro7['idadePublicacao']);

// --- Exercício 8 ---
console.log('--- Exercício 8 ---');

const livro8 = {
  titulo: "O Grande Gatsby",
  autor: "F. Scott Fitzgerald",
  anoPublicacao: 1925,
  genero: "Romance",
  idadePublicacao: 2024 - 1925,
  avaliacao: null
};

if (livro8.avaliacao === null) {
  livro8.avaliacao = 4.5;
} else {
  console.log('O livro já possui uma avaliação.');
}

console.log('Detalhes do livro com avaliação:', livro8);

// --- Exercício 9 ---
console.log('--- Exercício 9 ---');

const livro9 = {
  titulo: "A Ilha do Tesouro",
  autor: "Robert Louis Stevenson",
  anoPublicacao: 1883,
  genero: "Aventura",
  idadePublicacao: 2024 - 1883
};

livro9.genero = "Aventura";
console.log('Detalhes do livro:', livro9);

// --- Exercício 10 ---
console.log('--- Exercício 10 ---');

const livro10 = {
  titulo: "Moby Dick",
  autor: "Herman Melville",
  anoPublicacao: 1851,
  genero: "Aventura",
  idadePublicacao: 2024 - 1851,
  avaliacao: 4.2
};

// Excluindo a propriedade avaliação
delete livro10.avaliacao;

console.log('Detalhes do livro após excluir a avaliação:', livro10);

// --- Exercício 13 ---
console.log('--- Exercício 13 ---');

const estudante = {
  nome: "João Silva",
  matricula: 123456,
  curso: "Engenharia de Software",
  materias: ["Matemática", "Programação", "Algoritmos"]
};

console.log('Informações do estudante:', estudante);

// --- Exercício 14 ---
console.log('--- Exercício 14 ---');

const pessoa = {
  nome: "Ana Costa",
  idade: 30,
  solteiro: true,
  hobbies: ["Ler", "Viajar", "Correr"]
};

function mostrarInfoPessoa(pessoa) {
  for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]} (${typeof pessoa[chave]})`);
  }
}

mostrarInfoPessoa(pessoa);

// --- Exercício 15 ---
console.log('--- Exercício 15 ---');

pessoa.endereco = {
  rua: "Rua das Flores, 123",
  cidade: "Rio de Janeiro",
  estado: "RJ"
};

function mostrarInfoPessoa(pessoa) {
  for (let chave in pessoa) {
    if (typeof pessoa[chave] === 'object' && pessoa[chave] !== null) {
      console.log(`${chave}:`);
      for (let subChave in pessoa[chave]) {
        console.log(`  ${subChave}: ${pessoa[chave][subChave]}`);
      }
    } else {
      console.log(`${chave}: ${pessoa[chave]} (${typeof pessoa[chave]})`);
    }
  }
}

mostrarInfoPessoa(pessoa);

// --- Exercício 16 ---
console.log('--- Exercício 16 ---');

const pessoas = [
  { nome: "Carlos Souza", idade: 25, cidade: "São Paulo" },
  { nome: "Mariana Lima", idade: 32, cidade: "Belo Horizonte" },
  { nome: "Lucas Pereira", idade: 29, cidade: "Curitiba" }
];

console.log('Lista de pessoas:', pessoas);

// --- Exercício 17 ---
console.log('--- Exercício 17 ---');

const calculadora = {
  soma: (a, b) => a + b,
  subtracao: (a, b) => a - b,
  multiplicacao: (a, b) => a * b,
  divisao: (a, b) => b === 0 ? 'Não é possível dividir por zero' : a / b,
  calcularMedia: (numeros) => {
    const total = numeros.reduce((acc, num) => acc + num, 0);
    return total / numeros.length;
  }
};

console.log('Soma:', calculadora.soma(10, 5));
console.log('Subtração:', calculadora.subtracao(10, 5));
console.log('Multiplicação:', calculadora.multiplicacao(10, 5));
console.log('Divisão:', calculadora.divisao(10, 5));
console.log('Divisão por zero:', calculadora.divisao(10, 0));
console.log('Média:', calculadora.calcularMedia([1, 2, 3, 4, 5]));

// --- Exercício 18 ---
console.log('--- Exercício 18 ---');

const contaBancaria = {
  titular: "João da Silva",
  saldo: 1000,
  depositar: function(valor) {
    this.saldo += valor;
  },
  sacar: function(valor) {
    if (valor > this.saldo) {
      console.log('Saldo insuficiente para saque.');
    } else {
      this.saldo -= valor;
    }
  }
};

const cliente = {
  nome: "João da Silva",
  conta: contaBancaria
};

function mostrarSaldo(cliente) {
  console.log(`Nome do cliente: ${cliente.nome}`);
  console.log(`Saldo da conta: R$ ${cliente.conta.saldo}`);
}

// Realizando operações
contaBancaria.depositar(500);
contaBancaria.sacar(200);
contaBancaria.sacar(1500); // Tentativa de saque maior que o saldo

// Exibindo o saldo final
mostrarSaldo(cliente);
