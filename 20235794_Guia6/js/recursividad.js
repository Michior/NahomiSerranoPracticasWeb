//Otra forma de acceder a un elemnto HTML es utilziando el getelemntebyId del DOM
//notese que pasara para este caso no se antepone el caracter #
const campo = document.getElementById("idTxtNumero");

//definamos una funcion anonima que permita validar en tiempo real el ingreso de un numero 
const validarNumero = function (e){
    //Creamos una expresion regular que valida que sean numeros
    let validar = /^[0-9]{1}$/;
    let tecla = e.key;

    /*
    .test valida que la expresion regular conocida conel valor ingresado 
    podra observar qeu al intentar teclara un letra u otro caracter diferente 
    a un numero este no se escribe en el campo
    */
   if (!validarNumero.test(tecla)) e.preventDefault();
};

//definiendo el evento keypress para el campo
campo.addEventListener("keypress", validarNumero);

//trabajando con el boton calcular
const boton = document.getElementById("idBtnCalcular");

//Defineindo una funcion anonima para calcular el factorial de un numero
function calcularFactorial (numero){
    return numero < 2 ? 1 : numero * calcularFactorial(numero-1);
}

//definamos una funcion de tipo flecha para imprimir el resultado del factorial
const imprimir = (numero, resultado) => {
    const contenedor = document.getElementById("idDivResultado");
    contenedor.innerHTML = `El factorial de ${numero}! es ${resultado}`;
};

//definiendo una funcióon tradicional
function calcular(){
    let numero = document.getElementById("idTxtNumero").value;
    if (numero != ""){
        //llamamos a la funcion anonima para que calcule el factorial
        let resultado = calcularFactorial(numero);
        //enviando el resultado a una funcion de tipo flecha
        imprimir(numero, resultado);
    } else {
        alert("Debe ingresar un número válido");
    }
}

//definiendo el evento click para el boton 
boton.addEventListener("click", calcular);