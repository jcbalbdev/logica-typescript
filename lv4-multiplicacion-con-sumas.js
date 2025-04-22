"use strict";
/* Realiza una multiplicación de dos números sin usar *, solo sumas repetidas. */
let nume = 8;
let otroNume = 5;
function multiplicación(a, b) {
    let operacion = 0;
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    for (let i = 0; i < min; i++) {
        operacion += max;
    }
    return `la multiplicacion de ${a} y ${b} es : ${operacion}`;
}
console.log(multiplicación(nume, otroNume));
