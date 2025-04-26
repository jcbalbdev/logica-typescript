"use strict";
/* Usa push, pop, shift, unshift, y reasignación de índice para manipular un array. */
let misFrutas = ["manzana", "platano", "pera", "naranja"];
function agregaAlFinal(lista, fruta) {
    lista.push(fruta);
    return `se agrego ${fruta} al final de la lista. la nueva lista es ${lista}`;
}
console.log(agregaAlFinal(misFrutas, "mandarina"));
function eliminaElFinal(lista) {
    lista.pop();
    return `se elimino la ultima fruta de la lista. la nueva lista es ${lista}`;
}
console.log(eliminaElFinal(misFrutas));
