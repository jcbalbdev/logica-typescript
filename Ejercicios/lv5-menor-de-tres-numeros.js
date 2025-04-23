"use strict";
/* Dado tres números, encuentra el menor usando if. */
let prim = 2;
let seg = 10;
let terc = 3;
function elMenorEntre(a, b, c) {
    let menor = a;
    if (b < menor) {
        menor = b;
    }
    if (c < menor) {
        menor = c;
    }
    return `el menor entre ${a}, ${b} y ${c} es : ${menor}`;
}
console.log(elMenorEntre(prim, seg, terc));
