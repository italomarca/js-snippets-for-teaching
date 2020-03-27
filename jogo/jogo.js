var bancoDeDados = require('./bancoDeDados.js').database
var rs = require('readline-sync')

var pontuacoesUsuariosRef = bancoDeDados.ref('jogo')
var pontuacaoUsuarioRef = nome => bancoDeDados.ref(`jogo/${nome}`)


function buscaPontuacoes() {
    pontuacoesUsuariosRef.on('value', snapshot => {
        var pontuacoes = snapshot.val()
        Object.entries(pontuacoes).forEach(([chave, pontuacao]) => console.log(pontuacao.nome, '=>', pontuacao.pontuacao))
        iniciaJogo()
    })
}

function criaPontuacaoDeJogador(jogador) {
    var pontuacaoUsuario = pontuacaoUsuarioRef(jogador.nome)

    pontuacaoUsuario.set({
        nome: jogador.nome,
        pontuacao: jogador.pontuacao
    })
}
var jogador = (nome, pontuacao) => ({ nome, pontuacao })

function iniciaJogo() {
    // console.clear()
    console.log('========================= JOGO DE DIGITAR =========================')
    // buscaPontuacoes()
    var nome = rs.question('Digite seu nome: ')
    var entrada = rs.question('Digite o máximo de letras possíveis e pressione enter:\n')
    var pontuacao = entrada.length

    console.log('\n\n\n\n')
    console.log('Sua pontuação final foi:', pontuacao)

    console.log('========================= OBRIGADO POR JOGAR! =========================')

    criaPontuacaoDeJogador(jogador(nome, pontuacao))
}

buscaPontuacoes()