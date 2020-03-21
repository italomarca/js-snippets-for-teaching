
var db = admin.database();
var ref = db.ref("server/saving-data/aula");

var usersRef = ref.child("users");
usersRef.push({
    bulma : {
        idade : 50,
        full_name : "bullma"
    }
})

ref.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

/*
usersRef.set({
  goku: {
    idade: 50,
    full_name: "Kakarotto"
  },
  vegeta: {
    idade: 80,
    full_name: "Vegetal"
  }
});
*/