$(document).ready(function() { //Escuchamos cuando el DOM se ha cargado

  /* Añade nodo dentro de un elemento (apndchild)
  $('#container').html('<h1>hola</h1>'); */

  /* Texto en varios elementos (innerhtml)
  $('li').text('elemento'); */

  /* Seleccionar varios elementos
  $('li,ul').html('<p>elemento<p>'); */

  /* Selec. hijos directos o no.
  $('#list li').addClass('highlighted'); */

  /* Selec. hijos directos. 
  $('#list > li').addClass('highlighted'); */

  /* Selec. por atributo required
  $('input[required]').addClass('important') */

  /* Selec. por el valor del atributo
  $('input[placeholder="jon_nieve@gmail.com"]').addClass('highlighted') */

  /* Selec. si contiene una palabra (distingue enre mayusculas y minúsculas)
  $('input[placeholder*="Jon"]').addClass('highlighted'); */

  /* Encontrar elementos con selectores
  var result = $('#animals .creature');
  console.log(result); */

  /*Encontrar elementos de manera más eficiente atravesando el DOM */
  var result = $('#animals').find('.creature');
  console.log(result);
})