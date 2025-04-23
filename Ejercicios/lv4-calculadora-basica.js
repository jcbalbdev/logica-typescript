"use strict";
/* Declara dos variables numéricas y una variable string que represente una operación ("+", "-", "*", "/"). Usa if o switch para realizar la operación correspondiente. */
let primerNumero = 4;
let segundoNumero = 2;
let operacion = '*';
function calculadoraBasica(a, b, op) {
    if (op === '+') {
        return `la suma de ${a} y ${b} es : ${a + b}`;
    }
    else if (op === '-') {
        return `la resta de ${a} y ${b} es : ${a - b}`;
    }
    else if (op === '*') {
        return `la multiplicacion de ${a} y ${b} es : ${a * b}`;
    }
    else {
        return `la division de ${a} y ${b} es : ${a / b}`;
    }
}
console.log(calculadoraBasica(primerNumero, segundoNumero, operacion));
