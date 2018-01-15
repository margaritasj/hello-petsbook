$(document).ready(function() {
// llamando a las funciones para los input del formulario
  $('#class').material_select();
  $('#genre').material_select();
  // seleccion de elementos y declarando variables  

  $input1 = $('#class');
  $input2 = $('#breed');
  $input3 = $('#genre');
  $input4 = $('#age');
  $nextBtn = $('#next');

  var validateData = false;
  // eventos para validar que los formularios sean llenados
  $input1.change(function() {
    if ($(this).val() === '') {
      $input2.attr('disabled', 'disabled');
    } else {
      $input2.attr('disabled', false);
      validateData = true;
    }
  });

  $input2.on('input', function() {
    if ($(this).val() === '') {
      validateData = false;
    } else {
      validateData = true;
    }
  });

  $input3.change(function() {
    if ($(this).val() === '') {
      $input4.attr('disabled', 'disabled');
    } else {
      $input4.attr('disabled', false);
      validateData = true;
    }
  });

  $input4.on('input', function() {
    if ($(this).val() === '') {
      validateData = false;
    } else {
      validateData = true;
    }
  });

  $nextBtn.click(function() {
    window.location.href = '../views/upload.html';
  });
});