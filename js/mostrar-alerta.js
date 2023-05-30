//fucnion para mostrar alertas
const mostrarAlerta = ( mensaje, tipoAlerta ) => {
    // formulario
    const formulario = document.querySelector('#formularioRegistro');

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
        divAlerta.textContent = mensaje;
        // quitar el mensaje
        setTimeout(() => {
            divAlerta.remove();
        }, 5000);
        
        //mostrar
        formulario.appendChild( divAlerta );
    }
}
//exports
export {
    mostrarAlerta
}