//inicializando primer color de fondo en el input color
const primerColorFondo = function (event) {
    document.body.style.backgroundColor = event.target.value;
};

const cambiarColorFondo = function (color) {
    document.body.style.backgroundColor = color;
};

//funciones para modificar el color de los titulos
const primerColorTitulos = function (event) {
    let colorSeleccionado = event.target.value;
    const titulos = document.querySelectorAll("h1");
    for (let index = 0; index < titulos.length; index++) {
        titulos[index].style.color = colorSeleccionado;
    }
};

const cambiarColorTitulos = function (colorSeleccionado) {
    const titulos = document.querySelectorAll("h1");
    for (let index = 0; index < titulos.length; index++) {
        titulos[index].style.color = colorSeleccionado;
    }
};

//funciones para modificar el color de los parrafos
const primerColorParrafos = function (event) {
    let colorSeleccionado = event.target.value;
    const parrafos = document.querySelectorAll("p");
    for (let index = 0; index < parrafos.length; index++) {
        parrafos[index].style.color = colorSeleccionado;
    }
};

const cambiarColorParrafos = function (colorSeleccionado) {
    const parrafos = document.querySelectorAll("p");
    for (let index = 0; index < parrafos.length; index++) {
        parrafos[index].style.color = colorSeleccionado;
    }
};

let contadorAumentar = 1;
const aumentarLetra = function () {
    contadorAumentar += 0.005;
    document.body.style.fontSize = `${contadorAumentar}em`;
    const parrafos = document.querySelectorAll("p");
    for (let index = 0;  index < titulos.length; index++) {
        parrafos[index].style.fontSize = `${contadorAumentar}em`;
    }
    const titulos = document.querySelectorAll("h1");
    for (let index = 0;  index < titulos.length; index++) {
        titulos[index].style.fontSize = `${contadorAumentar}em`;
    }
};

let contadorDisminuir = 1;
const disminuirLetra = function () {
    contadorDisminuir -= 0.005;
    document.body.style.fontSize = `${contadorDisminuir}em`;
    const parrafos = document.querySelectorAll("p");
    for (let index = 0;  index < titulos.length; index++) {
        parrafos[index].style.fontSize = `${contadorDisminuir}em`;
    }
    const titulos = document.querySelectorAll("h1");
    for (let index = 0;  index < titulos.length; index++) {
        titulos[index].style.fontSize = `${contadorDisminuir}em`;
    }
};

const starDOM = () => {
    //obteniendo la referencia del boton cambiar fondo
    const buttonFondo = document.getElementById("idFondo");
    buttonFondo.value ="#ffffff";
    buttonFondo.addEventListener("input", primerColorFondo, false);
    buttonFondo.addEventListener("change", cambiarColorFondo, false);
    buttonFondo.select();

    //obteniendo la referencia del boton cambiar color de titulos
    const buttonTitulos = document.getElementById("idTitulos");
    buttonTitulos.value ="#000000";
    buttonTitulos.addEventListener("input", primerColorTitulos, false);
    buttonTitulos.addEventListener("change", cambiarColorTitulos, false);
    buttonTitulos.select();

    //obteniendo la referencia del boton cambiar color de parrafos
    const buttonParrafos = document.getElementById("idParrafos");
    buttonParrafos.value ="#000000";
    buttonParrafos.addEventListener("input", primerColorParrafos, false);
    buttonParrafos.addEventListener("change", cambiarColorParrafos, false);
    buttonParrafos.select();

    //obteniendo referencia a los botones
    const buttonAumentar = document.getElementById("idBtnAumentar");
    const buttonDisminuir = document.getElementById("idBtnDisminuir");

    buttonAumentar.addEventListener("click", aumentarLetra, false);
    buttonDisminuir.addEventListener("click", disminuirLetra, false);
};

starDOM();