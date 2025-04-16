"use strict";
/* Dado tres números, encuentra el menor usando if. */
let prim = 230;
let seg = 1;
let terc = 32;
function elMenorEs(a, b, c) {
    if (a <= b) {
        if (b < c) {
            return `el numero ${c} es el mayor`;
        }
        else {
            return `el numero ${b} es el mayor`;
        }
    }
    else {
        if (a < c) {
            return `el numero ${c} es el mayor`;
        }
        else {
            return `el numero ${a} es el mayor`;
        }
    }
}
console.log(elMenorEs(prim, seg, terc));
