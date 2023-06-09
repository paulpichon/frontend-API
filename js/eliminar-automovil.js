// importamos funcion para eliminar automovil
import { eliminarAutomovilApi } from "./eliminar-automovil-api.js";

// funcion para eliminar el automovil
const eliminarAutomovil = (e) => {
    //identificar en donde hace click
    //verificar si hacen click en la clase ELIMINAR
    if ( e.target.classList.contains('eliminar') ) {
        // obtener el ID del automovil
        const idEliminar = e.target.getAttribute('data-automovil');
        // LALAMR FUNCION PARA ELIMINARLO
        eliminarAutomovilApi( idEliminar );
        setTimeout(() => {
            window.location.href = "https://648378529800c800b760ba27--cheery-ganache-215d0a.netlify.app/mostrar-vehiculos.html";
        }, 3000);
    }
}
// exports
export {
    eliminarAutomovil
}