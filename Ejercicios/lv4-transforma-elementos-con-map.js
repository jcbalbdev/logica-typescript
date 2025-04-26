"use strict";
/* Usa map para multiplicar todos los elementos de un array por 2 */
let misImpares = [1, 3, 5, 7, 9];
function porDos(lista) {
    let listaNueva = lista.map((numero) => numero * 2);
    return `la lista de numero es ${lista} y si multimplicamos los elementos de la lista por 2 me genera esta lista ${listaNueva}`;
}
console.log(porDos(misImpares));
