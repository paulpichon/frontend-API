// funcion para editar automovil
const editarAutomovilAPI = async ( automovilObjEditar, id ) => {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify( automovilObjEditar );

    const requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    const response = await fetch(`http://localhost:5000/api/automoviles/${ id }`, requestOptions);
    const resultado = await response.json();

    // si el status es 200
    if ( response.status === 200) {
        console.log( resultado );
    }

    // return resultado;

}
// export
export {
    editarAutomovilAPI
}