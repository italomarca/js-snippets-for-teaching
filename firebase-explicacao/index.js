var admin = require("firebase-admin");

var serviceAccount = require("./credenciais.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://arbyte-explicacao.firebaseio.com"
});

var bancoDeDados = admin.database()

var rerLivros = bancoDeDados.ref('livros')


bancoDeDados.push({
  titulo: 'A longa marcha',
  autor: 'Ed Jocelyn' 
}, () => {
  process.exit()
})

