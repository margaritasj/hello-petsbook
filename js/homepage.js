$(document).ready(function() {
  $('.slider').slider();
  $('.btn-register').click(function () {
    event.preventDefault();
  window.location.href = '../views/register.html';
});
});