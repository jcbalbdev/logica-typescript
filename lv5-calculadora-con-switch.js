"use strict";
/* Crea una mini calculadora que reciba dos números y una operación (+, -, *, /) y devuelva el resultado. */
var Operacion;
(function (Operacion) {
    Operacion["Suma"] = "+";
    Operacion["Resta"] = "-";
    Operacion["Producto"] = "*";
    Operacion["Division"] = "/";
})(Operacion || (Operacion = {}));
let numPrim = 12;
let numSeg = 4;
function calculadora(a, b, op) {
    switch (op) {
        case Operacion.Suma:
            return `la suma de ${a} y ${b} es ${a + b}`;
            break;
        case Operacion.Resta:
            return `la suma de ${a} y ${b} es ${a - b}`;
            break;
        case Operacion.Producto:
            return `la suma de ${a} y ${b} es ${a * b}`;
            break;
        case Operacion.Division:
            return `la suma de ${a} y ${b} es ${a / b}`;
            break;
        default:
            return `Operacion no valida`;
            break;
    }
}
console.log(calculadora(numPrim, numSeg, "/"));
