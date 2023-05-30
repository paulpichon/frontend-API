//funcion para renderizar los automoviles
const automovilesHTML = ( automoviles ) => {

    //tabla tbody
    const tbody = document.querySelector('#automoviles tbody');
    // console.log( automoviles );
    automoviles.automoviles.forEach( auto => {
        //desestructurar
        const { color, marca, modelo, precio, puertas, transmision, year, _id } = auto;

        //construir HTML
        //TR
        const tr = document.createElement('tr');
        //th
        tr.innerHTML = `
            <th scope="row">${ marca }</th>
            <td>${ modelo }</td>
            <td>${ year }</td>
            <td>${ precio }</td>
            <td>${ puertas }</td>
            <td>${ transmision }</td>
            <td>${ color }</td>
            <td>
                <a href="editar-usuario.html?id=${ _id }" id="editar" class="editar" title="Editar Automovil"><i class="fa-solid fa-wand-magic-sparkles"></i></a>
                <a href="#" data-automovil="${ _id }" class="eliminar fa-solid fa-file-circle-xmark" title="Eliminar Usuario"></a>
            </td>
        `;
        //mostrar
        // si existe el elemento TBODY
        if ( tbody ) {
            tbody.appendChild( tr );
        }

    });

}
//exports
export {
    automovilesHTML
}