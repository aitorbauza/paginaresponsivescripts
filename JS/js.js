//FUNCIONES PARA INDEX
function aceptarCookies() {
    document.getElementById("cookie-banner").style.display = "none";
}

function rechazarCookies() {
document.getElementById("cookie-banner").style.display = "none";
alert("Reenviando al usuario a una página apropiada(peor) para él...")
window.location.href = "https://www.realmadrid.com/es-ES";
}

function redirectToLogin() {
window.location.href = "formulario1.html"; // Cambia 'login.html' por la URL de tu página de inicio de sesión
}

function registro() {
window.location.href = "formulario2.html"; // Cambia 'login.html' por la URL de tu página de inicio de sesión
}




//FUNCION PÁGINA PLANTILLA

function imagenEscondida() { //Nombre función
    var imagen = document.getElementById("imagen");
        if (imagen.style.display === "none") { //Si la imagen está oculta
            imagen.style.display = "block"; // La imagen aparecerá al clicar
            alert("Si clicas otra vez la imagen desaparece..."); //Te salta este mensaje para que sepas que si vuelves a clicar, desaprecerá
        } else {
            imagen.style.display = "none"; //Si la imagen aparece, se ocultará
        }
    }


//FUNCION ESTADIO

// Función que se ejecutará cuando se haga clic en el botón
function botonHistoria() {
    // Redireccionar a un enlace cuando se haga clic en el botón
    window.location.href = "https://www.fcbarcelona.es/es/club/instalaciones/spotify-camp-nou/historia";
}

function botonHistoria1() {
    // Redireccionar a un enlace cuando se haga clic en el botón
    window.location.href = "https://estadiolimpic.barcelona/es/historia";
}





// FUNCIONES PARA PAGINA PALMARÉS PARA MOSTRAR Y OCULTAR LOS AÑOS
function parrafo0 () {

    var EstiloTiempo = document.getElementsByClassName('anos')[0];

    //CAMBIAR EL ESTILO DEL PÁRRAFO
    if (EstiloTiempo.style.display == 'none') {
        EstiloTiempo.style.display = 'block';
    } else {
        EstiloTiempo.style.display = 'none';
    }   

}


function parrafo1 () {

    var EstiloTiempo = document.getElementsByClassName('anos')[1];

    //CAMBIAR EL ESTILO DEL PÁRRAFO
    if (EstiloTiempo.style.display == 'none') {
        EstiloTiempo.style.display = 'block';
    } else {
        EstiloTiempo.style.display = 'none';
    }   

}

function parrafo2 () {

    var EstiloTiempo = document.getElementsByClassName('anos')[2];

    //CAMBIAR EL ESTILO DEL PÁRRAFO
    if (EstiloTiempo.style.display == 'none') {
        EstiloTiempo.style.display = 'block';
    } else {
        EstiloTiempo.style.display = 'none';
    }   

}

function parrafo3 () {

    var EstiloTiempo = document.getElementsByClassName('anos')[3];

    //CAMBIAR EL ESTILO DEL PÁRRAFO
    if (EstiloTiempo.style.display == 'none') {
        EstiloTiempo.style.display = 'block';
    } else {
        EstiloTiempo.style.display = 'none';
    }   

}

function parrafo4 () {

    var EstiloTiempo = document.getElementsByClassName('anos')[4];

    //CAMBIAR EL ESTILO DEL PÁRRAFO
    if (EstiloTiempo.style.display == 'none') {
        EstiloTiempo.style.display = 'block';
    } else {
        EstiloTiempo.style.display = 'none';
    }   

}

function parrafo5 () {

    var EstiloTiempo = document.getElementsByClassName('anos')[5];

    //CAMBIAR EL ESTILO DEL PÁRRAFO
    if (EstiloTiempo.style.display == 'none') {
        EstiloTiempo.style.display = 'block';
    } else {
        EstiloTiempo.style.display = 'none';
    }   

}

function parrafo6 () {

    var EstiloTiempo = document.getElementsByClassName('anos')[6 ];

    //CAMBIAR EL ESTILO DEL PÁRRAFO
    if (EstiloTiempo.style.display == 'none') {
        EstiloTiempo.style.display = 'block';
    } else {
        EstiloTiempo.style.display = 'none';
    }   

}




//FUNCION PARA LA PAGINA PUNTUACIÓN

function agregarOpinion() {
    // Obtener los valores
    var nota = document.getElementById("notaestrellas").value;
    var opinion = document.getElementById("opinion").value;

    // Crear un nuevo elemento p
    var nuevoParrafo = document.createElement("p");
    nuevoParrafo.innerHTML = `<strong>Opinión:</strong> ${opinion} <br> <strong>Nota:</strong> ${nota}`;

    // Asignar una clase
    nuevoParrafo.classList.add("info");

    // Añadir el nuevo elemento al div con id "informacion"
    document.getElementById("informacion").appendChild(nuevoParrafo);
}