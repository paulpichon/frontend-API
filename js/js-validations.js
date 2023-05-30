$( document ).ready( function () {
    // Regex validar solo texto en campo marca
    $.validator.addMethod("regex", function(value, element, regexp) {
		var re = new RegExp(regexp);
		return this.optional(element) || re.test(value);
		},
		"Revisa los inputs"
	);
    
    $( "#formularioRegistro" ).validate( {
        rules: {
            marca: {
                required: true,
                regex: /^([a-zA-ZáéíóúÁÉÍÓÚñÑ]+[\s]*)+$/
            } ,
            modelo: {
                required: true,
                regex: /^([a-zA-ZáéíóúÁÉÍÓÚñÑ0-9]+[\s]*)+$/
            },
            year: {
                required: true,
                regex: /^([0-9]*)+$/,
                minlength: 4,
                maxlength: 4,
            },
            precio: {
                required: true,
                regex: /^([0-9]*)+$/
            },
            puertas: {
                required: true,
                regex: /^([0-9]*)+$/
            },
            transmision: {
                required: true,
                regex: /^([a-zA-ZáéíóúÁÉÍÓÚñÑ]+[\s]*)+$/
            },
            color: {
                required: true,
                regex: /^([a-zA-ZáéíóúÁÉÍÓÚñÑ]+[\s]*)+$/
            }
 
            
        },
        messages: {
            marca: {
                required: "La marca es obligatoria.",
                regex: "Solo se permiten letras."
            },
            modelo: {
                required: "El modelo es obligatoria.",
                regex: "No se permiten caracteres especiales."
            },
            year: {
                required: "El año es obligatoria.",
                regex: "No se permiten caracteres especiales.",
                minlength: "Debe tener un minimo de 4 digitos",
                maxlength: "Debe tener un maximo de 4 digitos"
            },
            precio: {
                required: "El precio es obligatoria.",
                regex: "No se permiten letras."
            },
            puertas: {
                required: "El numero de puertas es obligatorio.",
                regex: "No se permiten letras."
            },
            transmision: {
                required: "El tipo de transmision es obligatorio.",
                regex: "No se permiten numeros ni carcteres especiales."
            },
            color: {
                required: "El color es obligatorio.",
                regex: "No se permiten numeros ni caracteres especiales."
            },
        },
        errorElement: "em",
        errorPlacement: function (error, element) {
            error.addClass('invalid-feedback');
            element.closest('.form-group').append(error);
          },
          highlight: function (element, errorClass, validClass) {
            $(element).addClass('is-invalid');
          },
          unhighlight: function (element, errorClass, validClass) {
            $(element).removeClass('is-invalid');
          }
    } );
} );
