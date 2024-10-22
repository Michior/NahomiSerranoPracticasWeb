//Generamos un numero aleatorio que se encuentre en el rango de 1 al 25
const numeroAleatorio = Math.floor(Math.random()*25) + 1;
//Creamos la constante que permite identificar ek maximo de intentos 
const numeroIntentos = 3;
//Guardara el numero de intentos que realiza
let intentos = 1;
function generarNumeroAleatorio(){
    //Definimos una variable para impresion de mensajes
    let mensaje;
    //Utilizamos el dom para aceder la parrafo creado
    const parrafo = document.querySelector("#idParrafo");

    //Verificamos en que intento esta le usuario 
    if(intentos <= numeroIntentos){ //Se agrego el parseFloat porque si no al
        //Ejecutar el else de si es mayor o menor no me lo comprendia porque comparaba texto con números
        //Asi que lo converti a número de un solo
        let numero = parseFloat(prompt(
            "¿Que número se ha generado (Intento" + intentos + ")?"
        ));

         //Verificamos el numero aleatorio ingresado por el usuario 
    if (numero == numeroAleatorio){
        mensaje = `¡Es sorprendente, pudiste adivinar le numero oculto (${numeroAleatorio}). 
        Refresque la pagina para volver a jugar.`;
    } else if(intentos == numeroIntentos){
        mensaje =`Su número de intentos ha terminado.
        El número oculto era: ${numeroAleatorio}. Refresque para volver a jugar.`;
    }else {
        if (numero < numeroAleatorio){
            mensaje = `El número es más alto. Vuelva a intentarlo. 
            Quedan ${numeroIntentos - intentos} intentos.`;
        }else{
            mensaje = `El número es más bajo. Vuelva a intentarlo. 
            Quedan ${numeroIntentos - intentos} intentos.`;
        }
        /*mensaje = `Vuelva a intentar. Quedan ${
            numeroIntentos - intentos
        } intentos.`;*/
    }

    //aumentamos el valor de los intentos
    intentos++;
    } else {
        mensaje = `Su número de intentos ha terminado.
        El número oculto era: ${numeroAleatorio}. Refresque para volver a jugar.`
    }

    parrafo.innerHTML = mensaje;
}