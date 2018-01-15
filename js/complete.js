$(document).ready(function() {
  // seleccionando elementos y declarando variables
  $username = $('#input-1');
  $email = $('#input-2');
  $password = $('#input-3');
  $rePassword = $('#input-4');
  $next = $('#next');

  var validUser = false;
  var validemail = false;
  var validPsw = false;
  var validRePsw = false;

  // expresion regular para verificar email
  var REGEX = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
  var MAXLENGTH = 8;

  // validaciones
  $username.on('input', function() {
    if ($(this).val()) {
      validUser = true;
      $email.attr('disabled', false);
      console.log(validUser);
    }
  });

  $email.on('input', function() {
    if (REGEX.test($(this).val())) {
      validemail = true;
      $password.attr('disabled', false);
      console.log(validemail);
    }
  });

  $password.on('input', function() {
    if ($(this).val().length === MAXLENGTH) {
      validPsw = true;
      $rePassword.attr('disabled', false);
      console.log(validPsw);
    }
  });

  $rePassword.on('input', function() {
    if ($password.val().length === $rePassword.val().length) {
      validRePsw = true;
      activeBtn();
      console.log(validRePsw);
    }
  });

  // funcion que activa el botón
  function activeBtn() {
    $next.attr('disabled', false);
  }

  $next.click(function(e) {
    if (validUser && validemail && validPsw && validRePsw) {
      window.location.href = 'newsfeed.html';

      localStorage.username = $username.val();
      localStorage.email = $email.val();
      localStorage.password = $password.val();

      
    }
    
  });
});
