$(document).ready(function() {
  // seleccionando elementos y declarando variables
  $photo = $('#photo-upload');
  $voice = $('#voice-upload');
  $nextBtn = $('#next');

  var validPhotoPet = false;

  // EVENTO CHANGE: Para subir fotos.
  $photo.change(function(event) {
    var fileName = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
      $('.container-img').append('<img class = " offset-s1 col s8 height= "4vh" responsive-img" src= "' + event.target.result + '"/>');
    };
    reader.readAsDataURL(fileName);
    validPhotoPet = true;
  });

  // funcion que activa el botón
  function activeBtn() {
    $nextBtn.attr('disabled', false);
  }

  $nextBtn.click(function() {
    if (validPhotoPet === true) {
      localStorage.photoPet = $photo.val();
      window.location.href = 'dates.html';
    }
  });
});