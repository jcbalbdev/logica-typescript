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
        case Operacion.Resta:
            return `la resta de ${a} y ${b} es ${a - b}`;
        case Operacion.Producto:
            return `el producto de ${a} y ${b} es ${a * b}`;
        case Operacion.Division:
            return b !== 0
                ? `La división de ${a} entre ${b} es ${a / b}`
                : "Error: división entre cero";
        default:
            return `Operacion no valida`;
    }
}
console.log(calculadora(numPrim, numSeg, Operacion.Division));
