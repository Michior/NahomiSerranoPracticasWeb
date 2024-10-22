function aviso(){
    alert("Bienvenido al mundo de JavaScript")
}

function confirmacion(){
    //Los valores que puede almacenar la variable de confirmacion son true o false
    let confirmacion = confirm("¿Desea salor de la Sesión?")
    alert(`Valor seleccionado ${confirmacion}`)
}

function capturarDatos(){
    let nombre = prompt("¿Cuál es su nombre?"); //Va dar cero por defecto
    let edad = prompt("¿Cuál es su edad?");

    alert(`Su nombre es ${nombre} y su edad ${edad}`);
}

function dibujarParrafo(){
    let parrafo = prompt(
        "Escriba la información que desea visualizar en el parrafo"
    );

    //Utilizaremos la API DOM para acceder al elemento
    const p = document.querySelector("#idParrado");
    p.innerHTML = parrafo;
}