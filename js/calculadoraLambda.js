const sumar = (idNum1, idNum2) => {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);

    var res = num1 + num2;
    console.log(res);
    document.getElementById("idResultado").innerText = res;
}

const restar = (idNum1, idNum2) => {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);

    var res = num1 - num2;
    console.log(res);
    document.getElementById("idResultado").innerText = res;
}

const multiplicar = (idNum1, idNum2) => {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);

    var res = num1 * num2;
    console.log(res);
    document.getElementById("idResultado").innerText = res;
}

const dividir = (idNum1, idNum2) => {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNum2).value);

    var res = num1 / num2;
    console.log(res);
    document.getElementById("idResultado").innerText = res;
}

function agregarElemento() {
    // En el div en su contenido voy a poner codigo html
    document.getElementById('idDivision').innerHTML = "<button>Nuevo</button>";
}

function quitarElemento() {
    document.getElementById('idDivision').innerHTML = "";
}

function conceptosJS() {
    /*
    Tipos de datos en JS
    let, var y const (almacenar tipos de datos todos)
     */

    const IVA = 15;
    console.log(IVA);

    // var está quedando en desuso, let maneja mejor la memoria
    var nombre = "Kendrick";
    console.log(nombre)
    nombre = "Drake";
    console.log(nombre)

    let apellido = "Lamar";
    console.log(apellido);
    apellido = "Lewndowski";
    console.log(apellido);

    // Declaración de arreglos
    const diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
    console.log(diasSemana);
    console.log(diasSemana[0]);
    console.log(diasSemana[5]);

    diasSemana[5] = "Sabado";
    console.log(diasSemana[5]);
    diasSemana.push("Domingo"); // Insertar al final
    console.log(diasSemana);
    diasSemana.unshift("CasiLunes") // Insertar al inicio
    console.log(diasSemana)

    const numPares = [2, 4, 6, 8, 10];
    console.log(numPares);
    const numImpares = [1, 3, 5, 7, 9];
    const numCompletos = numPares.concat(numImpares);
    console.log(numCompletos);

    // Sentencias
    for (const dia of diasSemana) {
        console.log(dia);
        if (dia == "Viernes") {
            console.log("Gracias a Dios es Viernes");
        }
    }

    if (diasSemana[8] === undefined) {
        console.log("No tiene valor");
    } else {
        console.log("Si tiene valor");
    }

    // Manejo de objetos
    // Declaro valor el objeto en JSON 

    // Objeto con atributos "simples"
    const estudiante = {
        nombre: "Felipe",
        apellido: "Ramos",
        edad: "24",
        genero: "M",
        ciudadNacimiento: "UIO"
    }

    console.log(estudiante);
    console.log(estudiante.apellido);
    
    estudiante.nombre = "Geronio";
    console.log(estudiante);

    // Objeto con atributos complejos
    const profesor = {
        nombre: "Marilu",
        apellido: "Heredia",
        edad: "47",
        genero: "F",
        ciudadNacimiento: "GYE",
        direccion: {
            callePrincipal: "Av. America",
            calleSecundaria: "La Gasca",
            numeracion: "OE3-12",
            barrio: "Bronx"
        }
    }

    console.log(profesor);
    console.log(profesor.direccion.barrio);

    profesor.direccion.barrio = "Miravalle";
    console.log(profesor)

    // Arreglos de objetos
    const estu1 = {
        nombre: "Fernando",
        apellido: "Lopez"
    }

    const estu2 = {
        nombre: "Maria",
        apellido: "Yer"
    }

    const estu3 = {
        nombre: "Luis",
        apellido: "Asdfg"
    }

    const estu4 = {
        nombre: "Sebastian",
        apellido: "Cordero"
    }

    const estudiantes = [estu1, estu2, estu3, estu4];
    console.log(estudiantes);
    console.table(estudiantes);

    console.log(estudiantes[1].apellido);
    estudiantes[1].apellido = "Cambiar apellido";
    console.table(estudiantes);

    const profesores = [{nombre: "Fernando", edad: 25}, {nombre: "Andrea", edad: 30}];
    console.table(profesores);

    var prof = profesores.pop();
    console.log(prof);
    console.table(profesores);

    // Desestructuracion de arreglos
    const diasSemana2 = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const [d1, d2, d3, d4, d5] = diasSemana2; // No es necesario de todos, pero es lo comun
    console.log(d2);
    
    // Otra forma
    const [dia1 ,dia2, dia3, dia4, dia5] = ["Lun", "Mar", "Mie", "Jue", "Vie"];
    console.log(dia2);
    console.log(dia5);

    // Desestructuracion de objetos
    const vehiculo = {
        marca: "Tesla",
        modelo: "Cybertruck",
        anio: 2024
    }

    const {marca, anio} = vehiculo;
    console.log(marca);
    console.log(anio);

    const {modelo} = {
        marca: "Mercedes Benz",
        modelo: "GLC",
        anio: 2020
    }
    console.log(modelo);

    // Ej. Objeto complejo
    const avion = {
        marca: "Boeing",
        capacidad: 200,
        pilotos: {
            piloto: "Rodrigo",
            copiloto: "Alfredo"
        }
    }

/*     const{pilotos, capacidad} = avion;
    const{p1, p2} = pilotos;
    console.log(p1);
    console.table(pilotos);
    console.log(capacidad); */

    const{pilotos:{piloto, copiloto}, capacidad} = avion;
    console.log(piloto);
    

}