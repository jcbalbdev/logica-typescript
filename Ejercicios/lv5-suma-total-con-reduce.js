"use strict";
/* Usa reduce para sumar todos los elementos de un array numérico. */
let listaNum = [1, 2, 3, 4, 1, 5, 7, 9, 10];
function sumaConAcumulador(lista) {
    let sumaDeElementos = lista.reduce((acc, numero) => acc + numero, 0);
    return `la suma de esta lista (${lista}) es : ${sumaDeElementos} `;
}
console.log(sumaConAcumulador(listaNum));
