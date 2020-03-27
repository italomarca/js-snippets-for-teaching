var admin = require("firebase-admin");

var serviceAccount = require("./service-account-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://arbyte-b6523.firebaseio.com"
});

module.exports = admin