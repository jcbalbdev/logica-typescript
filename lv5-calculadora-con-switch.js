"use strict";
/* Crea una mini calculadora que reciba dos números y una operación (+, -, *, /) y devuelva el resultado. */
var Operacione;
(function (Operacione) {
    Operacione["Suma"] = "+";
    Operacione["Resta"] = "-";
    Operacione["Producto"] = "*";
    Operacione["Division"] = "/";
})(Operacione || (Operacione = {}));
let numPrim = 12;
let numSeg = 4;
function calculadora(a, b, op) {
    switch (op) {
        case Operacione.Suma:
            return `la suma de ${a} y ${b} es ${a + b}`;
            break;
        default:
            return `la suma de ${a} y ${b} es ${a - b}`;
            break;
    }
}
console.log(calculadora(numPrim, numSeg, "+"));
