//Accedamos al contenedor donde se mostraran los estudiantes
const containerArreglo = document.querySelector("#idContainerArreglo");
const containerArregloOrdenado = document.querySelector(
    "#idContainerArregloOrdenado"
);

//Accedemos a cada botón por medio de la API DOM
const btnAgregar = document.querySelector("#idBtnAgregar");
const btnOrdenar = document.querySelector("#idBtnOrdenar");

//Agregamos el evento click a los botnoes, adicionalmente
//se  le asigna la funcion que realizara
btnAgregar.addEventListener("click", agregarElemento);
btnOrdenar.addEventListener("click", ordenarElementos);

let arreglo = new Array();

function agregarElemento(){
    const numero = parseInt(document.querySelector("#inputNumero").value);
    //verificando que sea un numero
    if(isNaN(numero)){
        alert("Debe ingresar un número válido");
    } else {
        //Agregamos un nuevo elemento al arreglo
        arreglo.push(numero);

        //utilizamos la api dom para crear un elemento html
        let caja = document.querySelector("div"); //creamos un elemnto div
        caja.className = "col-md-1 colum"; //agregamos una clase al elemento div
        let valor = document.querySelector("h3"); //creamos un elemento h3
        valor.textContent = numero; //agregamos texto al h3
        caja.appendChild(valor); //le pasamos como hijo la etiqueta h3 a nuestro div

        //insertamos los nuevos elementos al contenedor
        //se utiliza bedoreend para insertar el nuevo 
        //elemento dentro del idcontainerarreglo y despues de su ultimo hijo 
        containerArreglo.insertAdjacentElement("beforeend", caja);
    }
}

function ordenarElementos(){
    //utilizaremos un for..of para recorrer el arreglo
    //a su vez se utilziara .sort para ordenarlo
    for (let i of arreglo.sort()){
        let caja = document.createElement("div");
        caja.className ="col-md-1 colum-green";
        let valor = document.createElement("h3");
        valor.textContent = i;
        caja.appendChild(valor);
        containerArregloOrdenado.insertAdjacentElement("beforeend", caja);
    }
}
