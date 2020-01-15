$(document).ready(main);
 
var contador = 1;
 
function main () {
	$('.menu_bar').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});
 
	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
}

$(function() {
	/*
		$.validator.setDefaults({
		  errorClass:'error-label',
		highlight: function(element){
			$(element).addClass('error-control');
		},
		unhighlight: function(element){
		$(element).removeClass('error-control');
		}
	  });
	*/
	  $("#mi-formulario").validate({
		rules: {
		  email: {
			required: true,
			email: true
		  },
		  password: "required",
		  password2: {
			required: true,
			equalTo: "#password"
		  }
		},
		messages: {
		  email: {
			required: 'Ingresa tu correo electrónico',
			email: 'Formato de correo no válido'
		  },
		  password: {
			required: 'Ingresa una contraseña',
			minlength: 'Largo insuficiente'
		  },
		  password2: {
			required: 'Rengresa la contraseña',
			equalTo: 'Las contraseñas ingresadas no coinciden',
			minlength: 'Largo insuficiente'
	
		  }
		}
	  });
	});