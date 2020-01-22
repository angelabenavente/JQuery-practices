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

  /*Encontrar elementos de manera más eficiente atravesando el DOM 
  var result = $('#animals').find('.creature');
  console.log(result); */

  /*Encontrar todos los hijos directos con selectores
  var result = $('#animals > *');
  console.log(result)*/


  /*Encontrar hijos directos determinados con selectores
  var result = $('#animals > div');
  console.log(result)*/

  /*Encontrar todos los hijos directos con método children
  var result = $('#animals').children();
  console.log(result);*/

  /*Encontrar hijos directos determinados con método children 
  var result = $('#animals').children('div');
  console.log(result); */

  /*Encontrar un hijo determinado con método children 
  var result = $('#animals').children().first();
  console.log(result); */

  /*Encontrar los hijos indirectos con método children
  var result = $('#animals').children().first().children('.creature');
  console.log(result); */

  /*Encontrar un hijo indirecto  con método children y last
  var result = $('#animals').children().first().children('.creature').last();
  console.log(result); */

  /*Encontrar un hijo indirecto  con método children y prev
  var result = $('#animals').children().first().children().last().prev().prev();
  console.log(result); */

  /*Encontrar un hijo indirecto  con método children y next 
  var result = $('#animals').children().first().children().first().next();
  console.log(result); */

  /*Encontrar el padre 
  var result = $('#cat').parent()
  console.log(result);  */


  /*Encontrar los padres (directos e indirectos) 
  var result = $('#cat').parents()
  console.log(result);  */

  /*Encontrar los padres (directos e indirectos) con X clase
  var result = $('#cat').parents('.category')
  console.log(result); */

  /*Encontrar el elemento más cercano con X clase
  var result = $('#cat').closest('.category')
  console.log(result); */

  /*Escuchar el evento click
  $('#example').on('click', function() {
    console.log('hola mundo');
  }) */

  /*Escuchar el evento click y mostrar el nodo que lo escucha
  $('#example').on('click', function() {
    console.log(this);
    console.log($(this)); //Objeto con el que se puede trabajar.
  }) */

  /*Escuchar el evento click y añadir clase al nodo que lo escucha 
  $('#example').on('click', function() {
    $(this).addClass('clicked');
  }) */

  /*Escuchar el evento click y añadir/quitar clase al nodo que lo escucha */
  $('#example').on('click', function() {
    $(this).toggleClass('clicked');
  })
})