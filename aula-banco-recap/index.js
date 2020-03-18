var sqlite = require('sqlite3');
var rs = require('readline-sync'); 

var db = new sqlite.Database('./banco-de-dados.db', erro => {
  if (erro) {
    return console.log('Erro ao conectar no banco de dados: ', erro);
  };

  // console.log('Conectado no banco de dados com sucesso!');  
})

function consultaAlunos() {
  var sql = 'SELECT * FROM alunos';
  db.all(sql, (erro, resultado) => {
    if (erro) {
      return console.log('Erro ao consultar alunos: ', erro);
    };

    console.table(resultado)
  })
}

function criaAluno(id, nome) {
  db.run('INSERT INTO alunos (id, nome) VALUES (?, ?)', [id, nome], erro => {
    if (erro) {
      return console.log('Erro ao incluir aluno: ', erro);
    };

    console.log('Aluno inserido com sucesso!');    
  })
}

function deletaAluno(nome) {
  db.run('DELETE FROM alunos WHERE nome = ?', nome, erro => {
    if (erro) {
      return console.log('Erro ao deletar aluno: ', erro);
    };

    console.log('Aluno deletado com sucesso!');    
  })
}

// Digite I para incluir
// Digite C para consultar
// Digite D para deletar

var comandoUsuario = rs.question('Digite I para incluir\nDigite C para consultar\nDigite D para deletar\nEscolha: ').toUpperCase().trim();

if (comandoUsuario === "I") {
  // aqui eu vou incluir um novo aluno
  var idAlunoParaIncluir = rs.questionInt("Digite o id do novo aluno: ")
  var nomeAlunoParaIncluir = rs.question("Digite o nome do novo aluno: ")

  criaAluno(idAlunoParaIncluir, nomeAlunoParaIncluir)

} else if (comandoUsuario === "C") {
  // aqui eu vou consultar os alunos

  consultaAlunos()

} else if (comandoUsuario === "D") {
  // aqui eu vou deletar um aluno

  var nomeAlunoParaDeletar = rs.question("Digite o nome do aluno a ser deletado: ")
  deletaAluno(nomeAlunoParaDeletar)
}
