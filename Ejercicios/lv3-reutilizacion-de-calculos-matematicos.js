"use strict";
/* Crea funciones areaRectangulo, areaTriangulo, areaCirculo. Usa cada una con diferentes valores. */
function productoDe(a, b) {
    return a * b;
}
function areaRectangulo(a, b) {
    return productoDe(a, b);
}
function areaTriangulo(a, b) {
    return productoDe(a, b) / 2;
}
function areaCirculo(a, b) {
    return productoDe(a, b);
}
console.log(`el area de un rectangulo de lados 4 y 5 es : ${areaRectangulo(4, 5)}`);
console.log(`el area de un triangulo de altura y base 2 y 5 es : ${areaRectangulo(2, 5)}`);
console.log(`el area de un cuadrado de lados 6 y 5 es : ${areaRectangulo(6, 5)}`);
