var admin = require("firebase-admin");

var serviceAccount = require("./credenciais.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://arbyte-b6523.firebaseio.com"
});

var bancoDeDados = admin.database().ref('mensagens')

bancoDeDados.push({
  de: 'italo novo',
  para: 'alguem',
  mensagem: 'oi'
})
