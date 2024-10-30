//Accediendo a los elementos html
const inputNombre = document.getElementById("idTxtNombre");
const inputApellido = document.getElementById("idTxtApellido");
const inputFechaNacimiento = document.getElementById("idTxtFechaNacimiento");
const inputRdMasculino = document.getElementById("idRdMasculino");
const inputRdFemenino = document.getElementById("idRdFemenino");
const cmbPais = document.getElementById("idCmdPais");
const inputDireccion = document.getElementById("idTxtDireccion");
const inputNombrePais = document.getElementById("idNombrePais");

const buttonAgregarPaciente = document.getElementById("idBtnAgregar");
const buttonLimpiarPaciente = document.getElementById("idBtnLimpiar");
const buttonMostrarPaciente = document.getElementById("idBtnMostrar");
const buttonAgregarPais = document.getElementById("idBtnAddPais");

const notificacion = document.getElementById("idNotificacion");
const toast = new bootstrap.Toast(notificacion);
const mensaje = document.getElementById("idMensaje");

//componente modal
const idModal = document.getElementById("idModal");

//arreglo global de pacientes
let arrayPaciente = [];

// Variable para almacenar el índice del paciente a editar
let pacienteIndex = -1;

// Función para limpiar el formulario
const limpiarForm = () => {
    inputNombre.value = "";
    inputApellido.value = "";
    inputFechaNacimiento.value = "";
    inputRdMasculino.checked = false;
    inputRdFemenino.checked = false;
    cmbPais.value = 0;
    inputDireccion.value = "";
    inputNombrePais.value = "";

    pacienteIndex = -1; // Reiniciar el índice de paciente
    inputNombre.focus();
};

// Función para validar el ingreso del paciente
const addPaciente = function () {
    let nombre = inputNombre.value;
    let apellido = inputApellido.value;
    let fechaNacimiento = inputFechaNacimiento.value;
    let sexo =
        inputRdFemenino.checked == true
            ? "Mujer"
            : "Hombre";
    let pais = cmbPais.value;
    let labelPais = cmbPais.options[cmbPais.selectedIndex].text;
    let direccion = inputDireccion.value;

    if (
        nombre != "" &&
        apellido != "" &&
        fechaNacimiento != "" &&
        sexo != "" &&
        pais != 0 &&
        direccion != ""
    ) {
        if (pacienteIndex === -1) {
            // Agregar nuevo paciente
            arrayPaciente.push(
                new Array(nombre, apellido, fechaNacimiento, sexo, labelPais, direccion)
            );
            mensaje.innerHTML = "Se ha registrado un nuevo paciente";
        } else {
            // Editar paciente existente
            arrayPaciente[pacienteIndex] = new Array(nombre, apellido, fechaNacimiento, sexo, labelPais, direccion);
            mensaje.innerHTML = "Paciente editado correctamente";
        }

        // Mostrar la notificación
        toast.show();
        limpiarForm();
    } else {
        mensaje.innerHTML = "Faltan campos por completar";
        toast.show();
    }
};

// Función que imprime la ficha de los pacientes registrados
function imprimirFilas() {
    let $fila = "";
    let contador = 0;

    arrayPaciente.forEach((element) => {
        $fila += `<tr>
                    <td scope="row" class="text-center fw-bold">${++contador}</td>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                    <td>${element[2]}</td>
                    <td>${element[3]}</td>
                    <td>${element[4]}</td>
                    <td>${element[5]}</td>
                    <td>
                        <button onclick="editarPaciente(${contador - 1})" type="button" class="btn btn-primary" alt="Editar">
                            <i class ="bi bi-pencil-square"></i>
                        </button>
                        <button onclick="eliminarPaciente(${contador - 1})" type="button" class="btn btn-danger" alt="Eliminar">
                            <i class ="bi bi-trash3-fill"></i>
                        </button>
                    </td>
                </tr>`;
    });
    return $fila;
}

const imprimirPacientes = () => {
    let $table = `<div class ="table-responsive">
                    <table class ="table table-striped table-hover table-bordered">
                        <tr> 
                            <th scope ="col" class= "text-center" style= "width: 5%">#</th>
                            <th scope ="col" class= "text-center" style= "width: 15%">Nombre</th>
                            <th scope ="col" class= "text-center" style= "width: 15%">Apellido</th>
                            <th scope ="col" class= "text-center" style= "width: 10%">Fecha nacimiento</th>
                            <th scope ="col" class= "text-center" style= "width: 10%">Sexo</th>
                            <th scope ="col" class= "text-center" style= "width: 10%">País</th>
                            <th scope ="col" class= "text-center" style= "width: 25%">Dirección</th>
                            <th scope ="col" class= "text-center" style= "width: 10%">Opciones</th>
                        </tr>
                        ${imprimirFilas()}
                    </table>
                </div>`;
    document.getElementById("idTablaPacientes").innerHTML = $table;
};

// Función para editar paciente
const editarPaciente = (index) => {
    pacienteIndex = index;
    const paciente = arrayPaciente[index];

    inputNombre.value = paciente[0];
    inputApellido.value = paciente[1];
    inputFechaNacimiento.value = paciente[2];
    inputRdMasculino.checked = paciente[3] === "Hombre";
    inputRdFemenino.checked = paciente[3] === "Mujer";
    cmbPais.value = [...cmbPais.options].findIndex(option => option.text === paciente[4]);
    inputDireccion.value = paciente[5];
};

// Función para eliminar paciente
const eliminarPaciente = (index) => {
    if (confirm("¿Estás seguro de que deseas eliminar este paciente?")) {
        arrayPaciente.splice(index, 1);
        mensaje.innerHTML = "Paciente eliminado correctamente";
        toast.show();
        imprimirPacientes();
    }
};

// Contador global de las opciones correspondientes al select (cmb) país
let contadorGlobalOption = cmbPais.children.length;
const addPais = () => {
    let paisNew = inputNombrePais.value;

    if (paisNew != "") {
        // Creando nuevo option con la API DOM
        let option = document.createElement("option");
        option.textContent = paisNew;
        option.value = contadorGlobalOption + 1;

        // Agregando el nuevo option en el select
        cmbPais.appendChild(option);

        // Asignando un mensaje a nuestra notificación
        mensaje.innerHTML = "País agregado correctamente";
        toast.show();
    } else {
        mensaje.innerHTML = "Faltan campos por completar";
        toast.show();
    }
};

// Agregando eventos a los botones y utilizando funciones tipo flecha
buttonLimpiarPaciente.onclick = () => {
    limpiarForm();
};

buttonAgregarPaciente.onclick = () => {
    addPaciente();
};

buttonMostrarPaciente.onclick = () => {
    imprimirPacientes();
};

buttonAgregarPais.onclick = () => {
    addPais();
};

// Se agrega el focus en el campo nombre país del modal
idModal.addEventListener("show.bs.modal", () => {
    inputNombrePais.value = "";
    inputNombrePais.focus();
});

// Ejecutar función al momento de cargar la página html
limpiarForm();