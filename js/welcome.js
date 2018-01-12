$(document).ready(function() {
// llamando a las funciones para los input del formulario
  $('#input-1').material_select();
  $('#input-2').material_select();
  $('#input-3').material_select();

  // seleccion de elementos y declarando variables  

  $nextBtn = $('#next');
  $input1 = $('#input-1');
  $input2 = $('#input-2');
  $input3 = $('#input-3');


  $nextBtn.click(function() {
    window.location.href = '../views/upload.html';
  });
});