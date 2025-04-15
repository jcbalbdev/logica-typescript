"use strict";
/* Crea una variable con una nota del 0 al 20. Muestra si es "Aprobado", "Desaprobado" o "Excelente" según el rango. */
let mario = 12;
let juan = 16;
let pedro = 9;
function estaAprobado(nota) {
    if (nota >= 15) {
        return `saco ${nota} por ende su nota es excelente`;
    }
    else if ((nota >= 10) && (nota < 15)) {
        return `saco ${nota} por ende esta aprobado`;
    }
    else {
        return `saco ${nota} por ende esta desaprobado`;
    }
}
console.log(estaAprobado(mario));
console.log(estaAprobado(juan));
console.log(estaAprobado(pedro));
