document.addEventListener("DOMContentLoaded", function(){
    //Accedemos al contenedor donde se mostrara los estudiantes
    const containerEstudiantes = document.querySelector(
        "#idContainerEstudiantes"
    );

    //Accedemos a cada boton por medio de la API DOM
    const btnAddEstudiante = document.querySelector("#idBtnAgregarEstudiantes");
    const btnViewEstudiantes = document.querySelector("#idBtnMostrarEstudiantes");

    //Agregamos el evento click a los botones, adicionalmente
    //se le asigna la función que realizará la operación
    btnAddEstudiante.addEventListener("click", addEstudiantes);
    btnViewEstudiantes.addEventListener("click", viewEstudiantes);

    //Arreglo de forma global
    let arrayEstudiantes = new Array(); 

    //creando funciones
    function addEstudiantes(){
        const inputCarnet = document
        .querySelector("#inputCarnet")
        .value.toString().trim()
        .toUpperCase();
        const inputNombre = document
        .querySelector("#inputNombre")
        .value.toString().trim()
        .toUpperCase();
        const inputApellidos = document
        .querySelector("#inputApellidos")
        .value.toString().trim()
        .toUpperCase();

    if (inputCarnet != "" && inputNombre != "" && inputApellidos != ""){
        const estudiante = {
            carnet: inputCarnet,
            nombre: inputNombre,
            apellidos: inputApellidos,
        }
        arrayEstudiantes.push(estudiante);
        alert("Se registro el nuevo estudiante");
        //limpiando campos del formulario
        document.querySelector("#inputCarnet").value = "";
        document.querySelector("#inputNombre").value = "";
        document.querySelector("#inputApellidos").value = "";
        document.querySelector("#inputCarnet").focus();
    }else {
        alert("Faltan campos que compñetar");
    }}
    function viewEstudiantes(){
        //Validando que existan estudiantes registrados
        let totalEstudiantes = arrayEstudiantes.length;
        if (totalEstudiantes > 0){
            let carnet;
            let nombres;
            let apellidos;
            let table = "<table class ='table table-light table-striped'>";
            table += "<thead>";
            table += "<tr>";
            table += "<th scope ='col' style='width: 5%;'>#</th>";
            table += "<th scope ='col' style='width: 15%;'>Carnet</th>";
            table += "<th scope ='col'>Nombres</th>";
            table += "<th scope ='col'>Apellidos</th>";
            table += "</tr>";
            table += "</thead>";
            table += "<tbody>";
            
            let i = 0;

            for (const estudiante of arrayEstudiantes){
                i++;
                let {carnet, nombre, apellidos} = estudiante;

                table += `<tr>`;
                table += `<td scope='row' style='font-weight: bold;'>${i}</td>`;
                table += `<td>${carnet}</td>`;
                table += `<td>${nombre}</td>`;
                table += `<td>${apellidos}</td>`;
                table += `</tr>`;
            }

            table += "</tbody>";
            table += "</table>";
            containerEstudiantes.innerHTML = table;
        } else {
            alert("No se han ingresado estudiantes");
        }
        console.log(arrayEstudiantes);
    }

    }
);