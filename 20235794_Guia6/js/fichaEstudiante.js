// Accediendo a los elementos del formulario de estudiante
const inputCarnet = document.getElementById("inputCarnet");
const inputNombreCompleto = document.getElementById("inputNombre");
const inputDUI = document.getElementById("inputDui");
const inputNIT = document.getElementById("inputNit");
const inputFechaNacimiento = document.getElementById("FechaNacimiento");
const inputCorreo = document.getElementById("inputEmail");
const inputEdad = document.getElementById("inputEdad");

const btnAgregarEstudiante = document.getElementById("idBtnAgregarEstudiantes");
const btnMostrarEstudiantes = document.getElementById("idBtnMostrarEstudiantes");
const contenedorEstudiantes = document.getElementById("idContainerEstudiantes");

// Arreglo global para almacenar estudiantes
let arrayEstudiantes = [];

// Función para limpiar el formulario
const limpiarFormulario = () => {
    inputCarnet.value = "";
    inputNombreCompleto.value = "";
    inputDUI.value = "";
    inputNIT.value = "";
    inputFechaNacimiento.value = "";
    inputCorreo.value = "";
    inputEdad.value = "";
    inputCarnet.focus();
};

// Función para validar los datos del formulario
const validarDatos = () => {
    const carnetVal = /^[A-Za-z]{2}\d{3}$/;
    const nombreVal = /^[A-Za-z\s]+$/;
    const duiVal = /^\d{8}-\d{1}$/;
    const nitVal = /^\d{4}-\d{6}-\d{3}-\d{1}$/
    const correoVal = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const edadVal = /^\d{2}$/; 

    if (!carnetVal.test(inputCarnet.value)) return "Carnet inválido (Ej: AB001)";
    if (!nombreVal.test(inputNombreCompleto.value)) return "Nombre inválido (solo letras y espacios)";
    if (!duiVal.test(inputDUI.value)) return "DUI inválido (Ej: 12345678-9)";
    if (!nitVal.test(inputNIT.value)) return "NIT inválido (Ej: 1234-123456-123-1)";
    if (!correoVal.test(inputCorreo.value)) return "Correo inválido";
    if (!edadVal.test(inputEdad.value)) return "Edad inválida (solo números)";

    return "";
};

// Función para agregar un estudiante
const agregarEstudiante = () => {
    const error = validarDatos();
    if (error) {
        alert(error);
    } else {
        const nuevoEstudiante = [
            inputCarnet.value,
            inputNombreCompleto.value,
            inputDUI.value,
            inputNIT.value,
            inputFechaNacimiento.value,
            inputCorreo.value,
            inputEdad.value,
        ];
        arrayEstudiantes.push(nuevoEstudiante);
        alert("Estudiante registrado correctamente");
        limpiarFormulario();
    }
};

// Función para mostrar la lista de estudiantes registrados
// Función para mostrar la lista de estudiantes registrados en formato de tabla
const mostrarEstudiantes = () => {
    if (arrayEstudiantes.length === 0) {
        contenedorEstudiantes.innerHTML = "<p>No hay estudiantes registrados.</p>";
    } else {
        let tablaEstudiantes = `
            <div class="table-responsive">
                <table class="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th scope="col" class="text-center" style="width: 5%">#</th>
                            <th scope="col" class="text-center" style="width: 10%">Carnet</th>
                            <th scope="col" class="text-center" style="width: 15%">Nombre</th>
                            <th scope="col" class="text-center" style="width: 10%">DUI</th>
                            <th scope="col" class="text-center" style="width: 15%">NIT</th>
                            <th scope="col" class="text-center" style="width: 15%">Fecha de nacimiento</th>
                            <th scope="col" class="text-center" style="width: 15%">Correo</th>
                            <th scope="col" class="text-center" style="width: 5%">Edad</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        arrayEstudiantes.forEach((estudiante, index) => {
            tablaEstudiantes += `
                <tr>
                    <td class="text-center fw-bold">${index + 1}</td>
                    <td>${estudiante[0]}</td> <!-- Carnet -->
                    <td>${estudiante[1]}</td> <!-- Nombre -->
                    <td>${estudiante[2]}</td> <!-- DUI -->
                    <td>${estudiante[3]}</td> <!-- NIT -->
                    <td>${estudiante[4]}</td> <!-- Fecha de nacimiento -->
                    <td>${estudiante[5]}</td> <!-- Correo -->
                    <td>${estudiante[6]}</td> <!-- Edad -->
                </tr>
            `;
        });

        tablaEstudiantes += `
                    </tbody>
                </table>
            </div>
        `;

        contenedorEstudiantes.innerHTML = tablaEstudiantes;
    }
};

// Asignando eventos a los botones
btnAgregarEstudiante.onclick = agregarEstudiante;
btnMostrarEstudiantes.onclick = mostrarEstudiantes;

// Limpia el formulario al cargar la página
limpiarFormulario();


// Asignando eventos a los botones
btnAgregarEstudiante.onclick = agregarEstudiante;
btnMostrarEstudiantes.onclick = mostrarEstudiantes;

// Limpia el formulario al cargar la página
limpiarFormulario();
