$(document).ready(function() {
  $('.slider').slider();

  $('.btn-register').click(function() {
    event.preventDefault();
    window.location.href = '../hello-petsbook/views/login.html';
  });

  setTimeout(function() {
    window.location.href = '../hello-petsbook/views/login.html';
  }, 25000);

  /* if (isMobile()) {
    function isMobile() {
      return (
        (navigator.userAgent.match(/Android/i)) ||
        (navigator.userAgent.match(/webOS/i)) ||
        (navigator.userAgent.match(/iPhone/i)) ||
        (navigator.userAgent.match(/iPod/i)) ||
        (navigator.userAgent.match(/iPad/i)) ||
        (navigator.userAgent.match(/BlackBerry/i))
      );
    } */

    
});