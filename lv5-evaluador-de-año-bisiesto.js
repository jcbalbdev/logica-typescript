"use strict";
/* Dado un año, determina si es bisiesto: divisible por 4, pero no por 100, excepto si también es divisible por 400. */
let año = 2400;
function esBisiesto(año) {
    if (año % 4 === 0) {
        if (año % 100 !== 0) {
            if (año % 400 === 0) {
                return `el ${año} es bisiesto`;
            }
            else {
                return `el ${año} no es bisiesto`;
            }
        }
        else {
            return `el ${año} no es bisiesto`;
        }
    }
    else {
        return `el ${año} no es bisiesto`;
    }
}
console.log(esBisiesto(año));
