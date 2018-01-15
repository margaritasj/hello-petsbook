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

  // validaciones
  $username.on('input', function() {
    if ($(this).val()) {
      validateUser = true;
      $email.attr('disabled', false);
    }
  });

  $email.on('input', function() {
    if (REGEX.test($(this).val())) {
      validemail = true;
      $password.attr('disabled', false);
    }
  });

  $password.on('input', function() {
    if ($(this.val().length === 8)) {
      validPsw = true;
      $rePassword.attr('disabled', false);
    }
  });

  $rePassword.on('input', function() {
    if ($password.val() === $rePassword.val()) {
      validRePsw = true;
      activeBtn();
    }
  });

  // funcion que activa el botón
  function activeBtn() {
    $nextBtn.attr('disabled', false);
  }

  $next.on('click', function() {
    if (validUser && validemail && validPsw && validRePsw) {
      localStorage.username = $username.val();
      localStorage.email = $email.val();
      localStorage.password = $password.val();
      
      window.location.href = '../views/profile.html';
    }
  });
});
