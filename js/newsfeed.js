$(document).ready(function() {
  $tag = $('.username')
  $title = $('#title');
  $menu = $('#menu');
  $avatar = $('#avatar');

  // funcion que llama al menu deslizable
  $('.button-collapse').sideNav();

  // 
  
  $(window).on('load', function() {
    $tag.append(localStorage.username);
  });

  $('#textarea-1').focus();
  /* Publicar post - Al presionar #btn-post se publica el comentario*/
  $('#btn-post').click(function() {
    event.preventDefault();
    var post = $('#textarea-1').val();
    $('#publication').append('<div class="card  post-container">' + '<div class ="avatar-container-2 padding2em">' + '<img src = "../assets/images/dog-perfil.jpg" class="circle avatar-xs">' + '<span>' + '<p>' + '<strong>' + localStorage.username + '</strong>' + '</p>' + '</span>' + '</div>' + '<div class="card-content wrap">' + '<p>' + post + '<p>' + '</div>' + '</div>');
    $('#textarea-1').val('');
    $('#textarea-1').focus();
  });
  
  $('.carousel.carousel-slider').carousel({fullWidth: true});

});