"use strict";
/* Dado tres números, ordénalos de menor a mayor sin usar arrays ni métodos de ordenamiento. */
let p = 2;
let s = 10;
let t = 3;
function menoramayor(a, b, c) {
    if ((a > b) && (a > c)) {
        if (b > c) {
            return `el orden de ${a}, ${b} y ${c} :  ${a} ${b} ${c}`;
        }
        else {
            return `el orden de ${a}, ${b} y ${c} :  ${a} ${c} ${b}`;
        }
    }
    else {
        if (b > c) {
            if (c > a) {
                return `el orden de ${a}, ${b} y ${c} :  ${b} ${c} ${a}`;
            }
            else {
                return `el orden de ${a}, ${b} y ${c} :  ${b} ${a} ${c}`;
            }
        }
        else {
            if (b > a) {
                return `el orden de ${a}, ${b} y ${c} :  ${c} ${b} ${a}`;
            }
            else {
                return `el orden de ${a}, ${b} y ${c} :  ${c} ${a} ${b}`;
            }
        }
    }
}
console.log(menoramayor(p, s, t));
