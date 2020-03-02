var rl = require('readline-sync');

var perguntas = [
    'Qual o seu nome?', 
    'Qual a sua idade?', 
    'Qual o seu endereço?', 
    'Qual a sua altura?', 
    'Qual sua cor favorita?'
];

console.log("######### ~ Pergunta nro 1 ~ #########")
rl.question(perguntas[0]);
console.log("\n")

console.log("######### ~ Pergunta nro 2 ~ #########")
rl.question(perguntas[1]);
console.log("\n")

console.log("######### ~ Pergunta nro 3 ~ #########")
rl.question(perguntas[2]);
console.log("\n")

console.log("######### ~ Pergunta nro 4 ~ #########")
rl.question(perguntas[3]);
console.log("\n")

console.log("######### ~ Pergunta nro 5 ~ #########")
rl.question(perguntas[4]);
console.log("\n")
