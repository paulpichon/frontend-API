// validar la funcion para validar el form
import { validarFormulario } from "./js/validar-formulario.js";
//mostrar automoviles
import { mostrarAutomoviles } from "./js/mostrar-automoviles.js";
//funcion para mostrar la info a editar del automovil
import { mostrarInfoEditar } from "./js/mostrar-info-editar.js";
//funcion para validar los formulario
import { validarForm } from "./js/js-validations.js";
// funcion para validar formulario editar
import { validarFormularioEditar } from "./js/validar-formulario-editar.js";

//agregar un listener al formulario
document.addEventListener('DOMContentLoaded', () => {
    //constantes que hacen referencia a los formularios
    // formulario para registrar un automovil
    const formulario = document.querySelector('#formularioRegistro');
    //formulario para editar un automovil
    const formularioEditar = document.querySelector('#formularioEditar');

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
    //verificar si existe el formulario en la pagina actual
    if (formulario) {
        // validar formulario
        validarForm("formularioRegistro");
        //añadir un listenner
        formulario.addEventListener('submit', validarFormulario);    
    }
    
    //Editar un automovil
    //verificar si existe el formulario en la pagina actual
    if (formularioEditar) {
        // validar formulario
        validarForm("formularioEditar");
        //añadir un listenner
        formularioEditar.addEventListener('submit', (e) => {
            validarFormularioEditar(e, idAutomovil)
        });    
    }
    //mostrar los automoviles
    mostrarAutomoviles();

});