"use strict";
/* Evalúa una variable numérica y muestra si es positiva, negativa o igual a cero. */
let veintiuno = 21;
let numeroCero = 0;
let negativo = -21;
function queEs(valor) {
    if (valor > 0) {
        return `el numero ${valor} es positivo`;
    }
    else if (valor < 0) {
        return `el numero ${valor} es negativo`;
    }
    else {
        return `el numero ${valor} es neutro`;
    }
}
