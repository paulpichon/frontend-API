// importar la funcion para mostrar la alerta
import { mostrarAlerta } from "./mostrar-alerta.js";

// funcion para eliminar el automoovil desde la API
const eliminarAutomovilApi = async( id ) => {
    // selector donde se mostrara la alerta
    const tabla = document.querySelector('#automoviles');
    // console.log( tabla.getAttribute('id') );
    
    // return;
    
    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      };
      
    const response = await fetch(`http://localhost:5000/api/automoviles/${ id }`, requestOptions)
    const resultado = await response.json(); 

    // si el response.status es 200 mostramos una alerta
    if ( response.status === 200 ) {
        mostrarAlerta('REGISTRO ELIMINADO', 'success', tabla);
    }else {
        mostrarAlerta('HUBO UN ERROR, FAVOR DE INTENTARLO DEPUES', 'error', tabla);
    }

}
// exports
export {
    eliminarAutomovilApi
}