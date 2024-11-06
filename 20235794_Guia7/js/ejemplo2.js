//obteniendo la referencia de los eloementos
//por medio de areglos asociativos
//aqui se esta utilizando el atributo name de cada elemento
const formulario = document.forms["frmRegistro"];
const button  = document.forms["frmRegistro"].elements["btnRegistro"];

const contraseña = document.getElementById("idPassword");
const contraseñaRepetida = document.getElementById("idPasswordRepetir");

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

    // Expresión regular para validar el formato de correo electrónico
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    //recorriendo elementos del formulario
    let elementos = formulario.elements;
    let totalElementos = elementos.length;
    let interesSeleccionado = false;
    let carreraSeleccionada = false;

    for (let index = 0; index < totalElementos; index++) {
        //accediendo a cada hijo del formulario
        let elemento = elementos[index];

        //verificando el tipo de control en el formulario
        let tipoElemento = elemento.type;
        //verificando el tipo de nodo
        let tipoNode = elemento.nodeName;

        //contabilizando el total de input type = text
        if (tipoElemento == "text" && tipoNode == "INPUT") {
            if (elemento.value =="" || elemento.value.trim() == ""){
                alert ("No pueden haber campos vacíos")
                return;
            }
            totText++;
        } 
        //contabilizando el total del input type = password
        else if (tipoElemento == "password" && tipoNode == "INPUT") {
            if (elemento.value == "" || elemento.value.trim() == ""){
                alert("La contraseña no puede estar vacía")
            } else {
                if (contraseña.value != contraseñaRepetida.value){
                    alert ("Las contraseñas no son iguales. Intentelo nuevamente.")
                    return;
                }
            }totPass++;
        } 
        //contabilizando el total del input type = email
        else if (tipoElemento === "email" && tipoNode === "INPUT") {
            if (elemento.value.trim() === "") {
                alert("El campo de correo electrónico no puede estar vacío.");
                return;
            } else {                
                if (!regexEmail.test(elemento.value)) {
                    alert("Ingrese un correo electrónico válido.");
                    return;
                } else {
                    totEmail++; // Incremento solo si el correo es válido
                }
            }
        } 
        //contabilizando el total del input type = radio
        else if (tipoElemento == "radio" && tipoNode == "INPUT") {
            if (elemento.checked) {
                carreraSeleccionada = true; // Marcar como verdadero si al menos un interés está seleccionado
            }
            totRadio++;
        }
        //contabilizando el total del input type = checkbox
        else if (tipoElemento == "checkbox" && tipoNode == "INPUT") {
            if (elemento.checked) {
                interesSeleccionado = true; // Marcar como verdadero si al menos un interés está seleccionado
            }
            totCheck++;
        }
        //contabilizando el total del input type = file
        else if (tipoElemento == "file" && tipoNode == "INPUT") {
            console.log(elemento);
            totFile++
        } 
        //contabilizando el total del input type = date
        else if (tipoElemento === "date" && tipoNode === "INPUT") {
            if (elemento.value.trim() === "") {
                alert("Este campo de fecha no puede estar vacío.");
                return;
            } else {
                let fechaIngresada = new Date(elemento.value); // Convertir el valor ingresado a un objeto Date
                let fechaActual = new Date(); // Obtener la fecha actual
        
                // Ajuste para comparar solo la fecha, sin horas, minutos o segundos
                fechaActual.setHours(0, 0, 0, 0);
        
                if (fechaIngresada > fechaActual) {
                    alert("La fecha no puede ser superior a la fecha actual.");
                    return;
                } else {
                    totDate++; // Incremento solo si la fecha es válida
                }
            }
        }
        //contabilizando el total del input type = email
        else if (tipoNode == "SELECT") {
            console.log(elemento);
            totSelect++
        } 
    }
 //Dado que primero debeo iterar, lo dejo por fuera la verificacion de escoger al menos un interes de los checkboxes
    if (!interesSeleccionado) {
        alert("Debe seleccionar al menos un interés.");
        return;
    }

    if (!carreraSeleccionada) {
        alert("Debe seleccionar una carrera.");
        return;
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

