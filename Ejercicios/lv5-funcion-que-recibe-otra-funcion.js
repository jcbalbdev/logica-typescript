"use strict";
/* Escribe una función ejecutar que reciba otra función como parámetro y la ejecute. */
function suma(a, b) {
    return a + b;
}
function resta(a, b) {
    return a - b;
}
function ejecutar(a, b, operacion) {
    return operacion(a, b);
}
console.log(ejecutar(2, 3, suma));
