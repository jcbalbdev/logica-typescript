"use strict";
/* Realiza una multiplicación de dos números sin usar *, solo sumas repetidas. */
let nume = 8;
let otroNume = 5;
function multiplicacionPositivo(a, b) {
    let operacion = 0;
    let mayor = Math.max(a, b);
    let menor = Math.min(a, b);
    for (let i = 0; i < menor; i++) {
        operacion += mayor;
    }
    return operacion;
}
function multiplicacion(a, b) {
    let respuesta;
    if (((a > 0) && (b > 0)) || ((a < 0) && (b < 0))) {
        respuesta = multiplicacionPositivo(a, b);
    }
    else if ((a < 0) || (b < 0)) {
        respuesta = -multiplicacionPositivo(a, b);
    }
    else {
        respuesta = 0;
    }
    return `el producto de ${a} y ${b} es ${respuesta}`;
}
console.log(multiplicacion(nume, otroNume));
