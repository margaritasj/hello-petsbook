$(document).ready(function() {

  // evento que regresa a la vista anterior
  $('#arrow-back').click(function() {
    window.location.href = 'newsfeed.html';
  }),

  // Mostrar el nombre de usuario almacenado
  $(window).on('load', function() {
    $('.username').append(localStorage.username);
  });

  // evento que cambia el estado de la insignia
  $('#switch').click(function(e) {
    if (event.target.checked === true) {
      $('#status').text('Me Adoptaron');
    } else if (event.target.checked === false) {
      $('#status').text('Busco un hogar');
    }
  });
  
  $('#textarea-1').focus();
  /* Publicar post - Al presionar #btn-post se publica el comentario*/
  $('#btn-post').click(function() {
    event.preventDefault();
    var post = $('#textarea-1').val();
    $('#publication').append('<div class="card">' + '<div class ="avatar-container-2 padding1em">' + '<img src = "../assets/images/dog-perfil.jpg" class="circle avatar-xs">' + '<span>' + '<p>' + '<strong>' + localStorage.username + '</strong>' + '</p>' + '</span>' + '</div>' + '<div class="card-content wrap">' + '<p>' + post + '<p>' + '</div>' + '</div>');
    $('#textarea-1').val('');
    $('#textarea-1').focus();
  });

  $('.modal').modal();

  $('#btn-addimg').click(function() {
    event.preventDefault();

    $('#file').hide();

    $('input[type=file]').change(function() {
      var file = (this.files[0].name).toString();
      var reader = new FileReader();

      $('#file-path').text('');
      $('#file-path').text(file);

      reader.onload = function(e) {
        $('#file-path').append('src', e.target.result);
        $('#publication').append('<div class="card">' + '<div class ="avatar-container-2">' + '<img src = "../assets/images/dog-perfil.jpg" class="circle avatar-xs">' + '<span>' + '<p> Huellitas </p>' + '</span>' + '</div>' + '<div class="card-content wrap">' + '<p>' + post + '<p>' + '</div>' + '</div>');
      }

      reader.readAsDataURL(this.files[0]);
    });
  });
  
});