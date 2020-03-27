var repositorio = require('./aluno-repository')
const cTable = require('console.table');

function mostraAtividades(atividades) {
    console.table(atividades)
}
repositorio.buscaAtividade('kobus', mostraAtividades);

