//Obteniendo la referencia de los botones
//por medio del get.elementbyid

const buttonSpan = document.getElementById("idBtnSpan");
const buttonP = document.getElementById("idBtnP");
const buttonDiv = document.getElementById("idBtnDiv");
const buttonButton = document.getElementById("idBtnButton");
const imprimir = document.getElementById("imprimirResultado");

//Definicion de funciones
const contarElementos = function(elemento){
    //obteniendo el numero de etiquetas span que se han generado
    //en el documento html
    let arrayElement = document.getElementsByTagName(elemento);
    console.log(
        `Etiquetas buscadas <${elemento}></${elemento}> /Total encontras : ${arrayElement.length}` 
    );
    for (const i of arrayElement){
        console.log(i);
    }

    alert("Revise la consola del navegador");
   
};

//definicion de eventos para los botones
buttonSpan.onclick = () => {
    contarElementos("span");
};

buttonP.onclick = () => {
    contarElementos("P");
};

buttonDiv.onclick = () => {
    contarElementos("div");
};

buttonButton.onclick = () => {
    contarElementos("button");
};