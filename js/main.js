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

  /*Escuchar el evento click y añadir/quitar clase al nodo que lo escucha
  $('#example').on('click', function() {
    $(this).toggleClass('clicked');
  }) */

  /*Escuchar el evento click y añadir/quitar clase al nodo que lo escucha 
  $('#exampleTwo').on('click', 'button.switch', function() {
    console.log(this); //nos mostrará el botón y no el div #example
    $(this).parent().toggleClass('clicked'); //Se le aplica la clase al padre
  }) */

    /*Escuchar el evento change y mostrar valores en otro nodo
  $('#exampleThree').on('change', '#place', function() {
    //$('#place').val(); //Nos entrega el value seleccionado, pero no el precio
    var selected = $('#exampleThree select option:selected') //seleccionada
    var value = selected.val();
    //var price = selected.attr('data-price') 
    var price = selected.data('price') //esto es más correcto que usar attr

    console.log(value);
    console.log(price);

    if(price) {
      $('#result').html(value + '' + price);
    }
  }); */

  /*Escuchar el evento click y añadir/quitar clase al nodo que lo escucha 
  $('#exampleTwo').on('click', 'button.switch', function() {
    console.log(this); //nos mostrará el botón y no el div #example
    $(this).parent().toggleClass('clicked'); //Se le aplica la clase al padre
  }) */

  /*Escuchar el evento keydown y mostrar valores en otro nodo
  $('#fourthExample').on('keydown', 'input', function() {
    var selected = $('#fourthExample select option:selected') //seleccionada
    $('#resultTwo').html('Your name is: ' + $(this).val());
  }); */

  /*Deshabilitar un enlace y la propagación del evento
  $('#fifthExample').on('click', 'a', function(event) {
    event.preventDefault(); // antes se usaba return: false
    event.stopPropagation(); // evitar la propagación al padre del enlace
    console.log('hi');
  }); */

  /*Vaciar el contenido html de un elemento
  $('#fifthExample').empty(); */

  /*Crear un nuevo atributo para un elemento 
  $('#fifthExample').attr('name', 'link'); */

/* Animaciones */
  $('#example1').on('click', function() {
    $(this).animate({
      opacity: 0.3
    }, 'fast', function() {alert('se ha completado')});     
  });
  
  $('#example2').on('click', function() {
    $(this).animate({
      left: 200,
      width: 50
    }, 'slow');      
  });

  $('#example3').on('click', function() {
    $(this).animate({
      left: '+=50',
      width: 200
    }, 'slow');      
  });

})