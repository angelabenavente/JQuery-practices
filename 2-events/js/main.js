$(document).ready(function() {

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
});