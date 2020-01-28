$(document).ready(function() { 

/*Vaciar el contenido html de un elemento
  $('#fifthExample').empty(); */

  /*Crear un nuevo atributo para un elemento 
  $('#fifthExample').attr('name', 'link'); */

/* Animaciones 
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
  }); */

/*Petición Ajax sencilla 
  $('#exampleTwo').on('click', 'button.switch', function() {
    $.ajax('result.html', {
      beforeSend: function() {
        $('#result').text('Loading...');
      }
    })
      .done(function(response) {
        $('#result').html(response);
      })
      .fail(function(request, errorType, errorMessage) {
        //timeout, error, abort, parseerror
        console.log(errorType);
        alert('Not found');
      })
      .always(function() {
        $('#exampleTwo').text('Completado');
      })
  }); */

  /* Formulario */
  $('#hasPets').on('change', function() {
    if($(this).is(':checked')) {
      $('#pets-row').show();
    } else {
      $('#pets-row').hide();
      $('#pets').val('');
      $('#pet-feedback').empty();
    }
  });
  $('#hasPets').trigger('change');

  $('#pet').on('change', function() {
    var pet =$(this).val();
    if(pet === "Dog") {
      $('#pet-feedback').text('Dogs are great!')
    } else if(pet === "Cat") {
      $('#pet-feedback').text('Cats are great!')
    } else {
      $('#pet-feedback').empty();
    }
  });
  $('#pet').trigger('change');

  $('#your-form').on('submit', function(event) {
    event.preventDefault();

      console.log($('#your-form').serialize());

      $.ajax('formSubmit.json', {
        type: 'post',
        data: $('#your-form').serialize()
      })
      .done(function(reponse) {
        $('#result').text(response.message)
        
    });
  })
});