//  importar funcion con la info de automovil
import { mostrarIndoInputsHTML } from "./mostrar-info-inputs.js";

//funcion para buscar la info del usuario a editar
const mostrarInfoEditar = async ( id ) => {
     
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
    const response = await fetch(`http://localhost:5000/api/automoviles/${ id }`, requestOptions)
    const resultado = await response.json();
    // console.log( resultado );
    //si el satus es 200 llamamos la funcion para mostrar la INFO en los inputs
    if ( response.status === 200 ) {
        //llamamos funcion para mostrar la info en los inputs
        mostrarIndoInputsHTML( resultado );
    }


}
//exports
export {
    mostrarInfoEditar
}