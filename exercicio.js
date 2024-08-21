// Array
const alunos = [
     { nome: 'Carolina', nota: 8 },
     { nome: 'Roberto', nota: 5.5 },
     { nome: 'Carlos', nota: 7 },
     { nome: 'Diana', nota: 6 },
     { nome: 'Elsa', nota: 4.8 }
];

// Função que filtra alunos com nota >= 6
const filtrarAlunosAprovados = (alunos) => {
     return alunos.filter(aluno => aluno.nota >= 6);
};

// Exibindo os alunos aprovados
const alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);