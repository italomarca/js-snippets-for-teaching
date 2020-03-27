var admin = require("firebase-admin");

var serviceAccount = require("./credenciais.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://arbyte-b6523.firebaseio.com"
});

var bancoDeDados = admin.database().ref('mensagens/id-mensagem-02')

bancoDeDados.set({
  de: 'ninguem',
  para: 'alguem',
  mensagem: 'oi de novo dsjiufhsidhfsiudhiudfh',
  anexo: 'meme.jpg'
})
