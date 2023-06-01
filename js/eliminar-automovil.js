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
            window.location.href = "http://127.0.0.1:5500/mostrar-vehiculos.html";
        }, 3000);
    }
}
// exports
export {
    eliminarAutomovil
}