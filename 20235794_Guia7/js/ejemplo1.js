//Accediendo a la referencia del documento que 
//tendra los nuevos elementos 
const newForm = document.getElementById("idNewForm");

//Accediendo a la referencia de botones
const buttonCrear = document.getElementById("idBtnCrear");
const buttonAddElemento = document.getElementById("idBtnAddElement");

//Nuevo boton de validacion
const buttonValidar = document.getElementById("idBtnValidar");

//accediendo al valor del select para determinar el tipo de elemento a crear
const cmbElemento = document.getElementById("idCmbElemento");

//accediendo a los controles del modal 
const tituloElemento = document.getElementById("idTituloElemento");
const nombreElemento = document.getElementById("idNombreElemento");

//creando modal con bootstrap
const modal = new bootstrap.Modal(document.getElementById("idModal"),{});

//accediendo funciones
const verificarTipoElemento = function () {
    let elemento = cmbElemento.value;
    //validando que se haya seleccionado un elemento 
    if (elemento != ""){
        //metodo perteneciente al modal de bootstrap 
        modal.show();
    } else {
        alert("Debe seleccionar el elemento que se creara");
    }
};

const newSelect = function () {
    //creando elementos
    let addElemento = document.createElement("select");
    //Crando atributos para el nuevo elemento
    addElemento.setAttribute("id", `id${nombreElemento.value}`);
    addElemento.setAttribute("class", "form-select");

    //creando option para el select
    for (let i = 1; i < 10; i++){
        let addOption = document.createElement("option");
        addOption.value = i;
        addOption.innerHTML = `Opcion ${i}`;
        addElemento.appendChild(addOption);
    }

    //creando label para el nuevo control
    let labelElemento = document.createElement("label");
    labelElemento.setAttribute("for", `id${nombreElemento.value}`);
    //crenado texto para el label
    labelElemento.textContent = tituloElemento.value;

    //creando label del id
    let labelId = document.createElement("span");
    labelId.textContent = `ID de control : ${nombreElemento.value}`;

    //creando plantilla de bootstrap para visualizar el nuevo elemento
    let divElemento = document.createElement("div");
    //agregando atributos
    divElemento.setAttribute("class", "form-floating");

    //creando el input que sera el hijo del div
    divElemento.appendChild(addElemento);
    //crenado el label que sera hijo del div
    divElemento.appendChild(labelElemento);

    //creando el span que sera jijo del nuevo formulario
    newForm.appendChild(labelId);

    //creando el div que sera jijo del nuevo formulario
    newForm.appendChild(divElemento);
};

const newRadioCheckbox = function (newElemento){
    //creando elementos
    let addElemento = document.createElement("input");
    //creando atributos para el nuevo elemento
    addElemento.setAttribute("id", `id${nombreElemento.value}`);
    addElemento.setAttribute("type", newElemento);
    addElemento.setAttribute("class", "form-check-input");

    //creando label para el nuevo control
    let labelElemento = document.createElement("label");
    labelElemento.setAttribute("class", "form-check-label");
    labelElemento.setAttribute("for", `id${nombreElemento.value}`);
    //creando texto para label
    labelElemento.textContent = tituloElemento.value;

    //creando label de id
    let labelId = document.createElement("span");
    labelId.textContent = `ID de control : ${nombreElemento.value}`;

    //creando plantilla de bootstrap para visualizar el nuevo elemento
    let divElemento =document.createElement("div");
    //Agregando atributos
    divElemento.setAttribute("class", "form-check");

    //creando el input que sera hijo del div
    divElemento.appendChild(addElemento);
    //creando el label que sera hijo del div
    divElemento.appendChild(labelElemento);

    //creando el span que sera hijo del nuevo formulario
    newForm.appendChild(labelId);

    //creando el div que sera hijo del nuevo formulario
    newForm.appendChild(divElemento);
};

const newInput = function (newElemento){
    //creando elementos de tipo = text, numbre, date y password
    let addElemento =
        newElemento == "textarea"
            ? document.createElement("textarea")
            : document.createElement("input");

    //Creando atributos para el nuevo elemento
    addElemento.setAttribute("id", `id${nombreElemento.value}`);
    addElemento.setAttribute("type", newElemento);
    addElemento.setAttribute("class", "form-control");
    addElemento.setAttribute("placeholder", tituloElemento.value);

    //creando label para el nuevo control
    let labelElemento = document.createElement("label");
    labelElemento.setAttribute("for", `id${nombreElemento.value}`);

    //creando icono para el label
    let iconLabel = document.createElement("i");
    iconLabel.setAttribute("class", "bi bi-tag");

    //creando texto para el label
    labelElemento.textContent = tituloElemento.value;

    //creando el lemento i como hijo del label, afterbegin le
    //indicamos que se creara antes de su primer hijo
    labelElemento.insertAdjacentElement("afterbegin", iconLabel);

    //creando label de id
    let labelId = document.createElement("span");
    labelId.textContent = `ID de control : ${nombreElemento.value}`;

    //creando la plantilla de bootstrap para visualizar el neuvo elemento 
    let divElemento = document.createElement("div");
    //agregando atributos
    divElemento.setAttribute("class", "form-floating mb-3");

    //creando el input que sera hijo dle div
    divElemento.appendChild(addElemento);
    //Creando el label que sera hijo del div
    divElemento.appendChild(labelElemento);

    //creando el span que sera hijo del nuevo formulario
    newForm.appendChild(labelId);

    //creando el div que sera hijo del nuevo formulario
    newForm.appendChild(divElemento);
};

// Función para validar el formulario
const validarFormulario = () => {
    const radios = newForm.querySelectorAll('input[type="radio"]'); // Selecciona todos los radios
    const checkboxes = newForm.querySelectorAll('input[type="checkbox"]'); // Selecciona todos los checkboxes
    const selects = newForm.querySelectorAll('select'); // Selecciona todos los selects
    let isValid = true; // Variable para verificar si el formulario es válido
    let alertMessages = []; // Array para almacenar mensajes de alerta

    // Validar radios
    const radioGroups = {};
    radios.forEach(radio => {
        if (!radioGroups[radio.name]) {
            radioGroups[radio.name] = false; // Inicializa el grupo de radios
        }
        if (radio.checked) {
            radioGroups[radio.name] = true; // Marca el grupo como seleccionado
        }
    });

    for (const group in radioGroups) {
        if (!radioGroups[group]) {
            isValid = false;
            alertMessages.push(`Por favor, seleccione al menos una opción para: ${group}`);
        }
    }

    // Validar checkboxes
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            return; // Si al menos uno está seleccionado, no hacemos nada
        }
    });

    // Si ningún checkbox está seleccionado, se agrega un mensaje de alerta
    const checkboxGroups = {};
    checkboxes.forEach(checkbox => {
        if (!checkboxGroups[checkbox.name]) {
            checkboxGroups[checkbox.name] = [];
        }
        checkboxGroups[checkbox.name].push(checkbox);
    });

    for (const group in checkboxGroups) {
        const hasChecked = checkboxGroups[group].some(c => c.checked);
        if (!hasChecked) {
            isValid = false;
            alertMessages.push(`Por favor, seleccione al menos una opción para: ${group}`);
        }
    }

    // Validar selects
    selects.forEach(select => {
        if (select.value === "") {
            isValid = false;
            alertMessages.push(`Por favor, seleccione una opción en: ${select.id}`);
        }
    });

    // Mostrar mensajes de alerta si hay problemas
    if (!isValid) {
        alert(alertMessages.join('\n')); // Muestra todos los mensajes de alerta en un solo cuadro
    } else {
        alert("Todos los campos están correctamente llenos y seleccionados.");
    }
};

// Agregando evento para el botón de validación
buttonValidar.onclick = validarFormulario;

//agregando evento click a los botones
buttonCrear.onclick = () => {
    verificarTipoElemento();
};

//Para verificar si el ID es unico
const unico = (id) => {
    return !! document.getElementById(id);
};

buttonAddElemento.onclick = () => {
    if (nombreElemento.value != "" && tituloElemento.value != "") {
        const idControl = `id${nombreElemento.value}`;

        //verifica si ya existe
        if (unico(idControl)){
            alert("Este ID ya existe. Elija otro nombre para el control, no pueden ser los mismos");
            return;
        }
        
        let elemento = cmbElemento.value;

        if (elemento == "select"){
            newSelect();
        } else if (elemento == "radio" || elemento == "checkbox"){
            newRadioCheckbox(elemento);
        } else {
            newInput(elemento);
        }
    } else {
        alert("Faltan campos por completar");
    }
}; 

//Agregando evento para el modal del bootstrap 
document.getElementById("idModal").addEventListener("show.bs.modal", () => {
    //limpiando campos para los nuevos elementos
    tituloElemento.value = "";
    nombreElemento.value = "";
    //inicializando puntero en el campo del titulo para el control
    tituloElemento.focus();
});