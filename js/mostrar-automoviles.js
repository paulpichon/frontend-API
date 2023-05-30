//funcion para renderizar el html
import { automovilesHTML } from "./renderizar-automoviles.js";

const mostrarAutomoviles = async() => {
    
    //hacer la peticion con la API
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
    const response = await fetch("http://localhost:5000/api/automoviles", requestOptions);
    const resultado = await response.json();

    //si devuelve un status 200 llamar la funcion para renderizarlo
    if ( response.status === 200 ) {
        //llamar funcion para mostrar los automoviles
        automovilesHTML( resultado );   
    }
}
//exports
export {
    mostrarAutomoviles
}