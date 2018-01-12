$(document).ready(function() {
  $photo = $('#photo-upload');
  $voice = $('#voice-upload');
  $nextBtn = $('#next');

  //
  $nextBtn.click(function() {
    window.location.href = '../views/complete.html';
  });
});