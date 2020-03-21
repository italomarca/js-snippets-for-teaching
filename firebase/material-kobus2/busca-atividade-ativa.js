var repositorio = require('./aluno-repository')
const cTable = require('console.table');

var resultado = [];
function mostraAtividades(data) {
    resultado.push(data)
    console.clear()
    console.table(resultado)

}
repositorio.monitoraNovasAtividade('italo', mostraAtividades);

