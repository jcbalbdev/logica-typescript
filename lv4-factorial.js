"use strict";
/* Calcula el factorial de un número n. */
let numPrueba = 5;
function factorial(num) {
    let comodin = 1;
    for (let i = 0; i < num; i++) {
        comodin = comodin * (i + 1);
    }
    return `el factorial de ${num} es ${comodin}`;
}
console.log(factorial(numPrueba));
/*
4x3x2x1
n=1
n=nx(i+1)
*/ 
