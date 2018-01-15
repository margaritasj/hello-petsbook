$(document).ready(function() {
  // selecionando elementos y declarando variables
  $direction = $('#input-1');
  $humanName = $('#input-2');
  $phone = $('#input-3');
  $humanPhoto = $('#subir-fotos');
  $nextBtn = $('#next');

  var validDir = false;
  var validName = false;
  var validPhone = false;
  var validPhoto = false;

  // Validaciones
  $direction.on('input', function() {
    if ($(this).val()) {
      validDir = true;
      $humanName.attr('disabled', false);
    }
  });
 
  $humanName.on('input', function() {
    if ($(this).val()) {
      validName = true;
      $phone.attr('disabled', false);
    }
  });

  $phone.on('input', function() {
    if ($(this).val() >= 9) {
      validPhone = true;
      $humanPhoto.attr('disabled', false);
    }
  });

  // EVENTO CHANGE: Para subir fotos.
  $('#subir-fotos').change(function(event) {
    var fileName = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
      $('.contenedor-img').append('<img class = "col s4 height= "4vh" responsive-img" src= "' + event.target.result + '"/>');
    };
    reader.readAsDataURL(fileName);

    validPhoto = true;
    activeBtn();
  });

  // funcion que activa el botón
  function activeBtn() {
    $nextBtn.attr('disabled', false);
  }

  $nextBtn.click(function() {
    if (validDir && validName && validPhone && validPhoto) {
      localStorage.dir = $direction.val();
      localStorage.human = $humanName.val();
      localStorage.phone = $humanPhoto.val();
      localStorage.photo = $humanPhoto.val();
      
      window.location.href = 'complete.html';
    }
    
  });
});
