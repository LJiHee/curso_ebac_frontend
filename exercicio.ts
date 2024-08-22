// Utilizando o TypeScript e a tipagem escreva duas funções:
// uma função de multiplicação que deverá receber como argumentos dois números e retornar a multiplicação deles
// e uma função de saudação que deverá receber um nome e retornar a concatenação “Olá “ + nome;

function multiplicandoNumeros(n1: number, n2: number): number {
     return n1 * n2;
}

const resultadoMultiplicacao = multiplicandoNumeros(5, 3);
console.log(resultadoMultiplicacao);

function dizOla(nome: string): string {
     return `Olá ${nome}`;
}

const saudacao = dizOla('Leiryellen');
console.log(saudacao); 