$(document).ready(function() { //Escuchamos cuando el DOM se ha cargado
  $('#container').html('<h1>hola</h1>'); //Añade nodo dentro de un elemento (apndchild)
  $('li').text('elemento'); //Texto en varios elementos (innerhtml)
  // $('li,ul').html('<p>elemento<p>'); //Seleccionar varios elementos.
})