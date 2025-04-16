"use strict";
/* Dado tres números, encuentra el menor usando if. */
let prim = 2;
let seg = 1;
let terc = 3;
function elMenorEntre(a, b, c) {
    let menor = a;
    if (b < menor) {
        menor = b;
    }
    if (c < menor) {
        menor = c;
    }
    return `el menor es ${menor}`;
}
console.log(elMenorEntre(prim, seg, terc));
