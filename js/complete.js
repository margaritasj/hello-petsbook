$(document).ready(function() {
  var $email = $('#email');
  var $password1 = $('#password1');
  var $password2 = $('#password2');
  var $next = $('#next');

  $password2.on('input', function() {
    if ($password1.val().length === $password2.val().length) {
      $next.removeClass('disabled');
    }
  });

  $next.on('click', function() {
    localStorage.email = $email.val();
    localStorage.password1 = $password1.val();
    window.location.href = '../views/profile.html';
  });
});
