// Obtener referencias a los botones y al elemento de mensaje
let mensaje = document.getElementById('mensaje');
let imgInicial = document.getElementById('imgInicial');
let txtInicial = document.getElementById('txtInicial');
let txtPuntaje = document.getElementById('txtPuntaje');
let txtIntentos = document.getElementById('txtIntentos');

let intentos = 0;
let puntaje = 0;

function verificar(event) {
    intentos++;
    txtIntentos.innerText = `Intentos: ${intentos}`;

    if (event.target.id === 'btnGato') {
        mensaje.innerText = 'Felicitaciones, has seleccionado la opción correcta';
        imgInicial.src = '../img/huh.webp';
        txtInicial.style.color = 'green';

        if (intentos === 1) {
            puntaje += 5;
        } else if (intentos === 2) {
            puntaje += 3;
        } else if (intentos === 3) {
            puntaje += 1;
        }

        txtPuntaje.innerText = `Puntaje: ${puntaje}`;
    } else {
        mensaje.innerText = 'Incorrecto';
        imgInicial.src = '/img/cat_shadow.png';
        txtInicial.style.color = 'red';

        if (intentos === 3) {
            reiniciar();
        }
    }
}

function reiniciar() {
    mensaje.innerText = 'Texto0 de prueba';
    imgInicial.src = '/img/cat_shadow.png';
    txtInicial.style.color = 'black';
    intentos = 0;
    puntaje = 0;
    txtIntentos.innerText = `Intentos: ${intentos}`;
    txtPuntaje.innerText = `Puntaje: ${puntaje}`;
}