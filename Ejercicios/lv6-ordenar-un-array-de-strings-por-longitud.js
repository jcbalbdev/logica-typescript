"use strict";
/* Ordena un array de palabras por la cantidad de letras que contiene. */
let palabras = ["liga", "de", "la", "justicia", "ilimitada"];
function ordenarPorTamaño(lista) {
    let listaOriginal = [...lista];
    let nuevaLista = lista.sort((a, b) => a.length - b.length);
    return `la lista de palabras es ${listaOriginal} y la lista ordenada por tamaño de palabra es ${nuevaLista}`;
}
console.log(ordenarPorTamaño(palabras));
