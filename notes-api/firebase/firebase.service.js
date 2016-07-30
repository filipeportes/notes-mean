const firebase = require('firebase');

firebase.initializeApp({
    serviceAccount: "./firebase/firebase.json",
    authDomain: "notes-web-filipe.firebaseapp.com",
    databaseURL: "https://notes-web-filipe.firebaseio.com"
});

var auth = firebase.auth();

var FirebaseService = {
    validateToken: validateToken
};

function validateToken(token) {
    return new Promise(function (resolve, reject) {

        auth.verifyIdToken(token)
            .then(function (user) {
                resolve(user);
            }, function (err) {
                reject(err);
            });

    });
}

module.exports = FirebaseService;