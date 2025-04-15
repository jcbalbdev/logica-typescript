"use strict";
/* Usa variables para calcular el área y perímetro de un rectángulo dados base y altura. */
let ladoA = 2;
let ladoB = 3;
function area(a, b) {
    return a * b;
}
function perimetro(a, b) {
    return 2 * (a + b);
}
console.log(`los lados del rectangulo son ${ladoA} y ${ladoB}. su area es ${area(ladoA, ladoB)} y su perimetro es ${perimetro(ladoA, ladoB)}`);
