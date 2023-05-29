function pedirNombre(){
    let pidenombre = prompt('Ingrese su nombre');

    while (pidenombre === null || pidenombre === '') {
        pidenombre = prompt('Por favor, debe ingresar su nombre');
    }    

    return pidenombre;
}

function saludo() {
    const nombre = pedirNombre();
    alert('Bienvenido ' + nombre);
}

saludo();
