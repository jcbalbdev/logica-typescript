"use strict";
/* Dado un array con duplicados, devuelve uno nuevo solo con valores únicos. */
let duplicados = [1, 2, 1, 3, 4, 1, 4, 5, 6, 7, 9, 2, 3, 4, 10];
function arraySinDuplicados(lista) {
    let valoresUnicos = Array.from(new Set(lista));
    return `la lista inicial es : ${lista} y la lista sin duplicados es ${valoresUnicos}`;
}
console.log(arraySinDuplicados(duplicados));
