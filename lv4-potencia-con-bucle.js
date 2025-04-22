"use strict";
/* Calcula base^exponente sin usar Math.pow(), solo con bucles. */
let numX = -3;
let exponente = 3;
function potencia(numero, exponente) {
    let operacion = 1;
    for (let i = 0; i < exponente; i++) {
        operacion *= numero;
    }
    return `${numero} elevado a ${exponente} es ${operacion}`;
}
console.log(potencia(numX, exponente));
