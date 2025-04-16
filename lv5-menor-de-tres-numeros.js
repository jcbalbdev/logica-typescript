"use strict";
/* Dado tres números, encuentra el menor usando if. */
let prim = 2;
let seg = 1;
let terc = 3;
function elMenorEs(a, b, c) {
    if (a <= b) {
        if (a < c) {
            return `el numero ${a} es el menor`;
        }
        else {
            return `el numero ${c} es el menor`;
        }
    }
    else {
        if (b < c) {
            return `el numero ${b} es el menor`;
        }
        else {
            return `el numero ${c} es el menor`;
        }
    }
}
console.log(elMenorEs(prim, seg, terc));
