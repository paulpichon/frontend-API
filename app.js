// validar la funcion para validar el form
import { validarFormulario } from "./js/validar-formulario.js";
//mostrar automoviles
import { mostrarAutomoviles } from "./js/mostrar-automoviles.js";
//funcion para mostrar la info a editar del automovil
import { mostrarInfoEditar } from "./js/mostrar-info-editar.js";

//agregar un listener al formulario
document.addEventListener('DOMContentLoaded', () => {
    //ID en el URL para editar automovil
    const parametrosURL = new URLSearchParams( window.location.search );
    //si hay parametro ID lo asignamos en una constante
    const idAutomovil = parametrosURL.get('id');
    // verificamos si existe el ID en los parametros
    // i existe llamamos la funcion paa mostrar la info en los inputs a EDITAR
    if ( idAutomovil ) {
        // mostrar info a editar
        mostrarInfoEditar( idAutomovil );    
    }
   
    //formulario
    const formulario = document.querySelector('#formularioRegistro');
    
    //verificar si existe el formulario en la pagina actual
    if (formulario) {
        //añadir un listenner
    formulario.addEventListener('submit', validarFormulario);    
    }
    //mostrar los automoviles
    mostrarAutomoviles();

});