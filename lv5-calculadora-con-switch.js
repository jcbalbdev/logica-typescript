"use strict";
/* Crea una mini calculadora que reciba dos números y una operación (+, -, *, /) y devuelva el resultado. */
var Operaciones;
(function (Operaciones) {
    Operaciones["Suma"] = "+";
    Operaciones["Resta"] = "-";
    Operaciones["Producto"] = "*";
    Operaciones["Division"] = "/";
})(Operaciones || (Operaciones = {}));
const operación = [Operaciones.Suma, Operaciones.Resta, Operaciones.Producto, Operaciones.Division];
let numPrim = 12;
let numSeg = 4;
function calculadora(a, b, op) {
    switch (op) {
        case operacion[0]:
            return `la suma de ${a} y ${b} es ${a + b}`;
            break;
        default:
            return `la suma de ${a} y ${b} es ${a - b}`;
            break;
    }
}
