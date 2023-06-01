//fucnion para mostrar alertas
const mostrarAlerta = ( mensaje, tipoAlerta, formulario ) => {
    // MENSAJE = mensaje que se mostrara en la alerta
    // tipoAlerta = success:error
    // formulario = es el selector donde se mostrara la alerta

    //verificar que no se muestre mas de 1 vez las alertas
    const alertas = document.querySelector('.alertaMensaje');
    if ( !alertas ) {
        //alerta
        const divAlerta = document.createElement('div');
        //VERIFICAR EL TIPO DE ERROR
        if ( tipoAlerta === 'success') {
            divAlerta.classList.add('alert', 'alert-success', 'text-center', 'mt-4', 'alertaMensaje');    
        }else {
            divAlerta.classList.add('alert', 'alert-danger', 'text-center', 'mt-4', 'alertaMensaje');
        }
        //Añadir el mensaje al div
        divAlerta.textContent = mensaje;
        // quitar el mensaje
        setTimeout(() => {
            divAlerta.remove();
        }, 3000);
        // si el parametro formulario es igual a 'automoviles mostramos la alerta antes de la tabla automobiles
        if ( formulario.getAttribute('id') === 'automoviles' ) {
            //mostrar
            //mostrar la alerta antes de la TABLA
            document.querySelector('.alertaEliminar').insertBefore( divAlerta, formulario);
        } else {
            //mostrar
            formulario.appendChild( divAlerta );
        }
    }
}
//exports
export {
    mostrarAlerta
}