"use strict";
/* Dado un año, determina si es bisiesto: divisible por 4, pero no por 100, excepto si también es divisible por 400. */
let año = 1993;
function esBisiesto(año) {
    if (año % 4 === 0) {
        return "Es bisiesto";
    }
    else {
        return "No es bisiesto";
    }
}
console.log(esBisiesto(año));
