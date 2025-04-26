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
function agregaAlInicio(lista, fruta) {
    lista.unshift(fruta);
    return `se agrego ${fruta} al principio de la lista. la nueva lista es ${lista}`;
}
console.log(agregaAlInicio(misFrutas, "mango"));
function eliminaElInicio(lista) {
    lista.shift();
    return `se elimino la primera fruta de la lista. la nueva lista es ${lista}`;
}
console.log(eliminaElInicio(misFrutas));
function cambioDeFruta(lista, posicion, fruta) {
    lista[posicion] = fruta;
    return `se cambio la fruta de la posicion ${posicion} y se agrego la  fruta ${fruta}. la nueva lista es ${lista} `;
}
console.log(cambioDeFruta(misFrutas, 2, "coco"));
