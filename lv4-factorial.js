"use strict";
/* Calcula el factorial de un número n. */
let numPrueba = 1;
function factorial(num) {
    let comodin = 1;
    if (num === 0 || num === 1) {
        return `el factorial de ${num} es 1`;
    }
    else {
        for (let i = 0; i < num; i++) {
            comodin = comodin * (i + 1);
        }
        return `el factorial de ${num} es ${comodin}`;
    }
}
console.log(factorial(numPrueba));
