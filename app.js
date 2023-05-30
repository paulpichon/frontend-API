// validar la funcion para validar el form
import { validarFormulario } from "./js/validar-formulario.js";

//agregar un listener al formulario
document.addEventListener('DOMContentLoaded', () => {
    //formulario
    const formulario = document.querySelector('#formularioRegistro');
    //añadir un listenner
    formulario.addEventListener('submit', validarFormulario);
    
});