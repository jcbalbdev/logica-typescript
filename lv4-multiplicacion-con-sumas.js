"use strict";
/* Realiza una multiplicación de dos números sin usar *, solo sumas repetidas. */
let nume = 2;
let otroNume = 3;
function multiplicación(a, b) {
    let operacion = 0;
    for (let i = 0; i < b; i++) {
        operacion += a;
    }
    return `la multiplicacion de ${a} y ${b} es : ${operacion}`;
}
console.log(multiplicación(nume, otroNume));
