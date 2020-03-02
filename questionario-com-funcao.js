
var perguntaAtual = 1;

function obtemResposta(pergunta, nroPergunta) {
    console.log(`######### ~ Pergunta número ${nroPergunta} ~ #########`);
    var resposta = rl.question(pergunta);
    console.log("\n");

    perguntaAtual = perguntaAtual + 1;

    return resposta;
};

var respostas = perguntas.map(pergunta => obtemResposta(pergunta, perguntaAtual))

console.log('respostas: ', respostas);
