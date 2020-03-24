var admin = require('firebase-admin');

var serviceAccount = require('./credenciais.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://arbyte-explicacao.firebaseio.com'
});

var database = admin.database()

module.exports = { database }