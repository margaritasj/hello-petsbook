$(document).ready(function() {
  /* ------------ deshabilitando el boton iniciar sesion ------------ */
  $('#btn-login').prop('disabled', false);

  
  $('#btn-login').click(function() {
    window.location.href = '../views/profile.html';
  }); 
});