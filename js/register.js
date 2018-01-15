$(document).ready(function () {

  // llamando a las funciones para los input del formulario
  $('#input-1').material_select();
  $('#input-3').material_select();

  // seleccion de elementos y declarando variables   
  $class = $('#input-1');
  $breed = $('#input-2');
  $genre = $('#input-3');
  $age = $('#input-4');
  $nextBtn = $('#next');

  var validClass = false;
  var validBreed = false;
  var validGenre = false;
  var validAge = false;

  // eventos que validan datos
  $class.on('change', function() {
    if ($(this).val() === '') {
      validClass = false;
    } else {
      validClass = true;
      $breed.attr('disabled', false);
    }
  });
  
  $breed.on('input', function() {
    if ($(this).val()) {
      validBreed = true;
    }
  });

  $genre.on('change', function() {
    console.log($(this).val());
    if ($(this).val() === '') {
      validGenre = false;
    } else {
      validGenre = true;
      $age.attr('disabled', false);
      console.log(validGenre);
    }
  });
  
  $age.on('input', function() {
    if ($(this).val()) {
      validAge = true;
      activeBtn();
    }
  });
 
  // funcion que activa el botón
  function activeBtn() {
    $nextBtn.attr('disabled', false);
  }


  $nextBtn.click(function() {
    if (validClass && validBreed && validGenre && validAge) {
      localStorage.class = $class.val();
      localStorage.breed = $breed.val();
      localStorage.genre = $genre.val();
      localStorage.age = $age.val();

      window.location.href = 'upload.html';
    }
  });

  
  /* Initialize Firebase
  var config = {
    apiKey: 'AIzaSyD1UOABdrBuyzKqY_NDa2WGwZAH45L76UQ',
    authDomain: 'hello-petsbook.firebaseapp.com',
    databaseURL: 'https://hello-petsbook.firebaseio.com',
    projectId: 'hello-petsbook',
    storageBucket: 'hello-petsbook.appspot.com',
    messagingSenderId: '767249236679'
  };
  firebase.initializeApp(config);

  // Login con email y password
  var btnLogin = $('#btn-login');

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });*/
});