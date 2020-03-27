// conexao com o meu banco de dados
var firebase = require('firebase-admin');
var rs = require('readline-sync')

var serviceAccount = require("./credenciais.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://arbyte-explicacao.firebaseio.com"
});

var database = firebase.database()

var jogador = (nome, pontuacao) => ({ nome, pontuacao })

// definindo as referencias do meu banco que eu vou usar
var pontuacoesUsuariosRef = database.ref('jogo')
var pontuacaoUsuarioRef = nome => database.ref(`jogo/${nome}`)


function mostraPontuacoes() {
    pontuacoesUsuariosRef.on('value', snapshot => {
        var pontuacoes = snapshot.val()
        Object.entries(pontuacoes)
            .forEach(([chave, pontuacao]) => console.log(pontuacao.nome, '=>', pontuacao.pontuacao))
    })
}

function criaPontuacaoDeJogador(jogador) {
    var pontuacaoUsuario = pontuacaoUsuarioRef(jogador.nome)

    pontuacaoUsuario.set({
        nome: jogador.nome,
        pontuacao: jogador.pontuacao
    }, mostraPontuacoes())
}

var nomeJogador = rs.question('Digite o seu nome: ')
var entradaJogador = rs.question('Digite o máximo de letras possíveis e pressione enter:\n')
var pontuacao = entradaJogador.length
console.log('Sua pontuacao: ', pontuacao);

var novoJogador = jogador(nomeJogador, pontuacao)

criaPontuacaoDeJogador(novoJogador)
