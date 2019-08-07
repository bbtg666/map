var admin = require("firebase-admin");

// Fetch the service account key JSON file contents
var serviceAccount = require("../model/firebase.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://locationgps-8240b.firebaseio.com"
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database();
var ref = db.ref("/Location");
ref.on("value", function(snapshot) {
  console.log(snapshot.val());
});