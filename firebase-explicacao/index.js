var admin = require("firebase-admin");
var rs = require('readline-sync')

var serviceAccount = require("./credenciais.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://arbyte-explicacao.firebaseio.com"
});

var bancoDeDados = admin.database()

var consultaTarefas = bancoDeDados.ref('tarefas')


// select * from tarefas
// consultaTarefas.on('value', (snapshot) => {
//   console.log(snapshot.val())
// })

// select * from tarefas where prioridade = <alguma coisa>
// select * from tarefas where prioridade >= <alguma coisa>
// select * from tarefas where prioridade <= <alguma coisa>

// var prioridadeMaxima = rs.questionInt("Digite a prioridade máxima da tarefa:")
// consultaTarefas
//   .set(null, () => {
//     console.log('dados excluídos com sucesso')
//   })

consultaTarefas.push({
  tarefa: 'Lavar as maos',
  prioridade: 10
})

consultaTarefas.push({
  tarefa: 'Fazer carinho no cachorro',
  prioridade: 1000
})

consultaTarefas.push({
  tarefa: 'Pagar as contas',
  prioridade: 9
})

consultaTarefas.push({
  tarefa: 'Limpar a casa',
  prioridade: 7
})