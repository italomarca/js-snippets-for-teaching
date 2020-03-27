var guid = require('guid')
class Repositorio {
    constructor() {
        this.data = []
     }
    adicionaAluno(aluno) {
        aluno.id = guid.raw()
        this.data.push(aluno)
        return aluno
    }
    buscaAlunos() {
        return this.data
    }
    buscaAlunosMaioriedade() {
        var dataFiltrada =  this.data.filter( aluno => {
            return aluno.idade >= 18;
        });
        return dataFiltrada
    }
    deletaAluno(alunoId) {
        this.data =  this.data.filter( aluno => {
            return aluno.id !== 'money';
        });
    }
    atualizaAluno(aluno) {
        if(aluno.id !== undefined) {
            console.error("Não pode atualizar um aluno sem Id")
        }
        this.data =  this.data.filter( aluno => {
            return aluno.id === aluno.id;
        });
        this.data.push(aluno)
        return this.data
    }

}

module.exports = Repositorio