//importar la funcion para mostrar errores
import { mostrarAlerta } from "./mostrar-alerta.js";

//funcion para registrar el AUTOMOVIL por medio de la API
const registrarAutomovilAPI = async( automovilObj ) => {
    // formulario
    const formulario = document.querySelector('#formularioRegistro');

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // parseamos el obj automovilObj
    var raw = JSON.stringify( automovilObj );

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    const response = await fetch("http://localhost:5000/api/automoviles", requestOptions);
    const dataJSON = await  response.json();
    // console.log( dataJSON );
    if ( response.status == 200 ) {
        // console.log( response.status );
        //mostrar la alerta de success
        mostrarAlerta('AUTOMOVIL REGISTRADO EXITOSAMENTE', 'success', formulario);
        //resetaer el form
        formulario.reset();
        
    }else {
        // console.log( response.status );
        mostrarAlerta('Verifique que los campos esten llenos correctamente', 'error', formulario);
    }
}
//exports 
export {
    registrarAutomovilAPI
}