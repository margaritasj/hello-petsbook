$(document).ready(function() {
  $nextBtn = $('#next');


  $nextBtn.click(function() {
    window.location.href = '../views/dates.html';
  });
  // EVENTO CHANGE: Para subir fotos.
  $('#subir-fotos').change(function(event) {
    var fileName = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
      $('.contenedor-img').append('<img class = "col s4 height= "4vh" responsive-img" src= "' + event.target.result + '"/>');
    };
    reader.readAsDataURL(fileName);
  });
});
