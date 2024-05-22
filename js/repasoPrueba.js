// Obtener referencias a los botones y al elemento de mensaje
let mensaje = document.getElementById('mensaje');
let imgInicial = document.getElementById('imgInicial');
let txtInicial = document.getElementById('txtInicial');

function verificar(event) {
    if (event.target.id === 'btnGato') {
        mensaje.innerText = 'Felicitaciones, has seleccionado la opción correcta';
        imgInicial.src = '../img/huh.webp';
        txtInicial.style.color = 'green';
    } else {
        mensaje.innerText = 'Pokémon incorrecto, la respuesta es: excadrill';
        imgInicial.src = '/img/cat_shadow.png';
        txtInicial.style.color = 'red';
    }
}

function reiniciar() {
    mensaje.innerText = 'Texto0 de prueba';
    imgInicial.src = '/img/cat_shadow.png';
    txtInicial.style.color = 'black';
}