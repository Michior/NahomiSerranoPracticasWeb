//obteniendo la referencia de los eloementos
//por medio de areglos asociativos
//aqui se esta utilizando el atributo name de cada elemento
const formulario = document.forms["frmRegistro"];
const button  = document.forms["frmRegistro"].elements["btnRegistro"];

//creando modal con bootstrap
const modal = new bootstrap.Modal(document.getElementById("idModal"), {});

//obteniendo la referencia del cuerpo del modal
//para imprimir el resultado
const bodyModal = document.getElementById("idBodyModal");
 
//recorrer el formulario 
const recorrerFormulario = function () {
    let totText = 0;
    let totRadio = 0;
    let totCheck = 0;
    let totDate = 0;
    let totSelect = 0;
    let totFile = 0;
    let totPass = 0;
    let totEmail = 0;

    //recorriendo elementos del formulario
    let elementos = formulario.elements;
    let totalElementos = elementos.length;

    for (let index = 0; index < totalElementos; index++) {
        //accediendo a cada hijo del formulario
        let elemento = elementos[index];

        //verificando el tipo de control en el formulario
        let tipoElemento = elemento.type;
        //verificando el tipo de nodo
        let tipoNode = elemento.nodeName;

        //contabilizando el total de input type = text
        if (tipoElemento == "text" && tipoNode == "INPUT") {
            console.log(elemento);
            totText++
        } 
        //contabilizando el total del input type = password
        else if (tipoElemento == "password" && tipoNode == "INPUT") {
            console.log(elemento);
            totPass++
        } 
        //contabilizando el total del input type = email
        else if (tipoElemento == "email" && tipoNode == "INPUT") {
            console.log(elemento);
            totEmail++
        } 
        //contabilizando el total del input type = radio
        else if (tipoElemento == "radio" && tipoNode == "INPUT") {
            console.log(elemento);
            totRadio++
        } 
        //contabilizando el total del input type = checkbox
        else if (tipoElemento == "checkbox" && tipoNode == "INPUT") {
            console.log(elemento);
            totCheck++
        } 
        //contabilizando el total del input type = file
        else if (tipoElemento == "file" && tipoNode == "INPUT") {
            console.log(elemento);
            totFile++
        } 
        //contabilizando el total del input type = date
        else if (tipoElemento == "date" && tipoNode == "INPUT") {
            console.log(elemento);
            totDate++
        } 
        //contabilizando el total del input type = email
        else if (tipoNode == "SELECT") {
            console.log(elemento);
            totSelect++
        } 
    }
    
    let resultado = 
        `
        Total de input[type="text"] = ${totText}<br>
        Total de input[type="password"] = ${totPass}<br>
        Total de input[type="radio"] = ${totRadio}<br>
        Total de input[type="checkbox"] = ${totCheck}<br>
        Total de input[type="date"] = ${totEmail}<br>
        Total de input[type="email"] = ${totEmail}<br>
        Total de select = ${totSelect}<br>
        `
    ;

    bodyModal.innerHTML = resultado;
    //funcion que permite mostrar el modal de bootstrap
    //esta funcion es definida por el bootstrap
    modal.show();
};

//agregando eventos al boton
button.onclick = () => {
    recorrerFormulario();
};

