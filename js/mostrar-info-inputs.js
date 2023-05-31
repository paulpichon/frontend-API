//funcion para mostrar la info del automovil en los inputs
const mostrarIndoInputsHTML = ( automovil ) => {

    // desestructuramos
    const { _id, marca, modelo, year, precio, puertas, transmision, color } = automovil;

    //constantes HTML
    const editarMarca = document.querySelector('#marca');
    const editarModelo = document.querySelector('#modelo');
    const editarYear = document.querySelector('#year');
    const editarPrecio = document.querySelector('#precio');
    const editarPuertas = document.querySelector('#puertas');
    const editarTransmision = document.querySelector('#transmision');
    const editarColor = document.querySelector('#color');

    editarMarca.value = marca;
    editarModelo.value = modelo;
    editarYear.value = year;
    editarPrecio.value = precio;
    editarPuertas.value = puertas;
    editarTransmision.value = transmision;
    editarColor.value = color;
    
        // creamos un objeto con la nueva informacion

}
// exports
export {
    mostrarIndoInputsHTML
}