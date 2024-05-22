var num1 = "";
var num2 = ""; 
var operacion = "";

// Agregar un número a la operación
function numero(numero) {
    // primer número
    if (!operacion) {
        num1 += numero;
        // Se actualiza el resultado en la interfaz
        document.getElementById("idResultado").innerHTML = num1;
    } else {
        // segundo número
        num2 += numero;
        // Se actualiza el resultado en la interfaz
        document.getElementById("idResultado").innerHTML = num2;
    }
}

function sumar() {
    operacion = 'sumar';
}

function restar() {
    operacion = 'restar';
}

function multiplicar() {
    operacion = 'multiplicar';
}

function dividir() {
    operacion = 'dividir';
}

function punto() {
    // primer número
    if (!operacion) {
        if (!num1.includes(".")) {
            num1 += ".";
            document.getElementById("idResultado").innerHTML = num1;
        }
    } else {
        // segundo número
        if (!num2.includes(".")) {
            num2 += ".";
            document.getElementById("idResultado").innerHTML = num2;
        }
    }
}

function borrar() {
    // primer número
    if (!operacion) {
        num1 = num1.slice(0, -1);
        document.getElementById("idResultado").innerHTML = num1 || "0";
    } else {
        // segundo número
        num2 = num2.slice(0, -1);
        document.getElementById("idResultado").innerHTML = num2 || "0";
    }
}

function resetear() {
    num1 = "";
    num2 = "";
    operacion = "";
    document.getElementById("idResultado").innerHTML = "0";
}

// calcular el resultado de la operación
function igual() {
    var respuesta = 0;
    if (operacion == 'sumar') {
        respuesta = parseFloat(num1) + parseFloat(num2);
    } else if (operacion == 'restar') {
        respuesta = parseFloat(num1) - parseFloat(num2);
    } else if (operacion == 'multiplicar') {
        respuesta = parseFloat(num1) * parseFloat(num2);
    } else if (operacion == 'dividir') {
        respuesta = parseFloat(num1) / parseFloat(num2);
    }

    // resultado en la interfaz
    document.getElementById("idResultado").innerHTML = respuesta;
    // reseteo variables
    num1 = "";
    num2 = "";
    operacion = "";
}