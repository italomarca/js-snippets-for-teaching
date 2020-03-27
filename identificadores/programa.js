var Nota = require('./objetos/nota')
var Aluno = require('./entidades/aluno')
var AlunoRepositorio = require('./dados/aluno-repositorio')

var repositorio = new AlunoRepositorio()

var notaFulano = new Nota(5,10)
var aluno = new Aluno("Fulano", 25, notaFulano)

console.log("adiciona um anulo")
repositorio.adicionaAluno(aluno)
console.log("Mostra alunos adicionados")
console.table(repositorio.buscaAlunos())

console.log('adiciona aluno menor de idade com mesma nota')
var notaMenorDeIdade = new Nota(5,10)
var alunoMenorDeIdade = new Aluno("Menor de idade", 15, notaMenorDeIdade)

console.log("Todos os alunos")
repositorio.adicionaAluno(alunoMenorDeIdade)
console.table(repositorio.buscaAlunos());
console.table("Alunos menor de idade")
console.table(repositorio.buscaAlunosMaioriedade());


console.log("verifica se aluno 1 é igual aluno 2")
var alunos = repositorio.buscaAlunos()
var aluno1 = alunos[0]
var aluno2 = alunos[1]

console.log(aluno1.id === aluno2.id) //comparação por identificador

console.log('Verifica se nota do aluno 1 é igual nota do aluno 2') //comparação por valor
var nota1 = aluno1.nota.prova1
var nota2 = aluno1.nota.prova2

console.log(aluno1.nota )