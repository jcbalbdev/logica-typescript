"use strict";
/* Usa .sort() para ordenar de menor a mayor y viceversa. */
let listaDeNume = [1, 2, 3, 4, 1, 2, 3, 410];
function ordenarNumeros(lista) {
    let listaOriginal = [...lista];
    let listaOrdenada = lista.sort((a, b) => a - b);
    return `la lista de palabras es ${listaOriginal} y la lista ordenada por tamaño de palabra es ${listaOrdenada}`;
}
console.log(ordenarNumeros(listaDeNume));
