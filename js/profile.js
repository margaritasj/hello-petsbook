$(document).ready(function () {

  $('#textarea-1').focus();
  /* Publicar post - Al presionar #btn-post se publica el comentario*/
  $('#btn-post').click(function () {
    event.preventDefault();
    var post = $('#textarea-1').val();
    $('#publication').append('<div class="card">' + '<div class ="avatar-container-2">' + '<img src = "../assets/images/dog-perfil.jpg" class="circle avatar-xs">' + '<span>' + '<p> Huellitas </p>' + '</span>' + '</div>' + '<div class="card-content wrap">' + '<p>' + post + '<p>' + '</div>' + '</div>');
    $('#textarea-1').val('');
    $('#textarea-1').focus();
  });

  $('.modal').modal();

  $('#btn-addimg').click(function () {
    event.preventDefault();

    $('#file').hide();

    $('input[type=file]').change(function () {
      var file = (this.files[0].name).toString();
      var reader = new FileReader();

      $('#file-path').text('');
      $('#file-path').text(file);

      reader.onload = function (e) {
        $('#file-path').append('src', e.target.result);
        $('#publication').append('<div class="card">' + '<div class ="avatar-container-2">' + '<img src = "../assets/images/dog-perfil.jpg" class="circle avatar-xs">' + '<span>' + '<p> Huellitas </p>' + '</span>' + '</div>' + '<div class="card-content wrap">' + '<p>' + post + '<p>' + '</div>' + '</div>');

      }

      reader.readAsDataURL(this.files[0]);
    });



  });
});