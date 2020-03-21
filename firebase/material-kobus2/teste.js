
class Aluno {
    constructor(){
        this.nome = "alunos"
    }
    funcaoDoObjeto (){
        console.log(this.nome)
    }
    funcaoAnonima() {
        var f = () => { console.log(this.nome) }
        f()
    }
}

var aluno = new Aluno()
aluno.funcaoDoObjeto()
aluno.funcaoAnonima()