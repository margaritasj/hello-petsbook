$('#btn-login').prop('disabled', true);

var firebase = require('firebase');

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyD1UOABdrBuyzKqY_NDa2WGwZAH45L76UQ',
  authDomain: 'hello-petsbook.firebaseapp.com',
  databaseURL: 'https://hello-petsbook.firebaseio.com',
  projectId: 'hello-petsbook',
  storageBucket: 'hello-petsbook.appspot.com',
  messagingSenderId: '767249236679'
};
firebase.initializeApp(config);
// Get a reference to service
var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

var email = $('#email').val();
var password = $('#password').val();;

if (email.length > 1) {
  $('#btn-login').prop('disabled', true);
}

if (password.length > 4) {
  $('#btn-login').prop('disabled', false);
}

$('#btn-login').click(function login(event) {
  /* Para iniciar */
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode === 'auth/wrong-password') {
      alert('Wrong password.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
    document.getElementById('quickstart-sign-in').disabled = false;
    // [END_EXCLUDE]
  });


