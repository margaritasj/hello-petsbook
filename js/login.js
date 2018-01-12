$(document).ready(function() {
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

  // hacemos login mediante email y password
  var btnLogin = $('#btn-login');

  function loginEmailPassword() {
    var email = $('#email-login').val();
    var password = $('#password-login').val();

    console.log($('#email-login').val());
    console.log($('#password-login').val());

    firebase.auth().signInWithEmailAndPassword(email, password).then(function(result) {
      window.location.href = '../views/profile.html';
    }).catch(function(error) {
      alert('Oh no! esta cuenta no se encuentra registrada, por favor verifica tu email o contraseña');

      /* '<div id='modal1' class='modal'>' + '<div class='modal-content'>' + '<h4>Modal Header</h4>' + '<p>A bunch of text</p>' + '</div>' + '<div class='modal-footer'>' + '</div>' + '</div>' */
    });
  }

  btnLogin.click(function() {
    event.preventDefault();
    loginEmailPassword();
  });

  // hacemos login con las distintas redes sociales
  $('#btn-fb').click(function() {
    loginRedesSociales('facebook');
  });
  $('#btn-tw').click(function() {
    loginRedesSociales('twitter');
  });
  $('#btn-gm').click(function() {
    loginRedesSociales('google');
  });

  function loginRedesSociales(redSocial) {
    switch (redSocial) {
    case 'facebook':
      var provider = new firebase.auth.FacebookAuthProvider();
      break;
    case 'twitter':
      var provider = new firebase.auth.TwitterAuthProvider();
      break;
    case 'google':
      var provider = new firebase.auth.GoogleAuthProvider();
      break;
    }
  }
  /* firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });*/

  firebase.auth().signInWithRedirect(provider);
  firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // ...
    }
    // The signed-in user info.
    var user = result.user;
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
});