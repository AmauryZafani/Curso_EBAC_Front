const alunos = [
    { nome: "João", nota: 7.5 },
    { nome: "Maria", nota: 6.0 },
    { nome: "Pedro", nota: 4.5 },
    { nome: "Ana", nota: 8.0 },
    { nome: "Lucas", nota: 9.5 }
  ];
  
  const alunosAprovados = arr => arr.filter(aluno => aluno.nota >= 6);
  
  console.log(alunosAprovados(alunos));