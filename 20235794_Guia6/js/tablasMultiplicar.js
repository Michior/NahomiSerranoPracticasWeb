//Accedemos al contenedor donde se mostrara los estudiantes
const containerResultado = document.querySelector("#idContainerResultado");

//Accedemos a cada boton por medio de la API DOM
const btnCalcular = document.querySelector("#idBtnCalcular");

//Agregamos el evento click al boton calcular
//se le asigna la funcion que realizara la operacion 
btnCalcular.addEventListener("click", calcularTabla);

function calcularTabla(){
    //capturando el valor del campo
    const inputTabla = document.querySelector("#inputTabla").value;

    //inicializamos niestro contenedor
    let contador = 1;

    //verifiquemos que el dato colocado sea un numero entero positivo
    if (inputTabla > 0){
        let tabla = `<h2>Tabla de multiplicar del ${inputTabla}</h2>`;
        //utilizaremos el do while para grenerar la tabla de multiplicar
        //Que el usuario ha indicado
        do{
            let resultado = contador * inputTabla;
            tabla += `<div class="row text-center">`;
            tabla += `<div class="col-md-1 colum"><h3>${contador}</h3></div>`;
            tabla += `<div class="col-md-1 colum-green"><h3>x</h3></div>`;
            tabla += `<div class="col-md-1 colum"><h3>${inputTabla}</h3></div>`;
            tabla += `<div class="col-md-1 colum"><h3>=</h3></div>`;
            tabla += `<div class="col-md-1 colum"><h3>${resultado}</h3></div>`;
            tabla += `</div>`;

            //iniciaremos el valor del contenedor
            //para que podamos salir del do while
            contador++;
        }while (contador <=12);

        document.querySelector("#inputTabla").value = 1;
        document.querySelector("#inputTabla").focus();
        containerResultado.innerHTML = tabla;
    } else {
        alert("No se ha ingresado un número válido");
    }
}