$(document).ready(function() {
  var $emailLogin = $('#email-login');
  var $passwordLogin = $('#password-login');
  var $btnLogin = $('#btn-login');

  var validateEmail = false;
  var validatePassword = false;

  // Función para habilitar btón

  $emailLogin.on('input', function() {
    if ($(this).val() === localStorage.email) {
    // alert('pasa');
      validateEmail = true;
    }
  });

  $passwordLogin.on('input', function() {
    if ($(this).val() === localStorage.password1) {
    // alert('esto tambien pasa');
      validatePassword = true;
      $btnLogin.removeClass('disabled');
    }
  });

  // Función para comparar los datos ingresados del usuario.
  $btnLogin.on('click', function() {
    event.preventDefault();
    if (validateEmail && validatePassword) {
      window.location.href = '../views/profile.html';
    } else {
      alert('Oh no! Necesitas registrate');
    }
  });
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

  /* -------- Para acceder con Gmail -------- */
  var btnLogingm = $('#btn-logingm');
  btnLogingm.click(function() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    });
  });
});
