// funcion para registrar el usuario en la API
import { registrarAutomovilAPI } from "./registrar-automovil-api.js";

const validarFormulario = ( e ) => {
    //prevent default
    e.preventDefault();
    //inputs values
    const marca = document.querySelector('#marca').value;
    const modelo = document.querySelector('#modelo').value;
    const year = document.querySelector('#year').value;
    const precio = document.querySelector('#precio').value;
    const puertas = document.querySelector('#puertas').value;
    const transmision = document.querySelector('#transmision').value;
    const color = document.querySelector('#color').value;

    //verificar que no este vacio
    if ( 
        marca !== '' ||
        modelo !== '' ||
        year !== '' ||
        precio !== '' ||
        puertas !== '' ||
        transmision !== '' ||
        color
    ) {
        //crear un objeto con la informacion
        const automovilObj = {
            marca, 
            modelo,
            year,
            precio,
            puertas,
            transmision,
            color
        }
        //Mandar el objeto a la funcion que lo guardara en la BD
        registrarAutomovilAPI( automovilObj );
        
    }

}

export {
    validarFormulario
}