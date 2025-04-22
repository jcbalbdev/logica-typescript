"use strict";
/* Dado un número, cuenta cuántos dígitos tiene (sin convertirlo a string). */
let miNum = 31415920;
function numeroDeDigitos(numero) {
    let cont = 1;
    let newNum = numero;
    while (newNum >= 10) {
        newNum = Math.floor(newNum / 10);
        cont++;
    }
    return `el numero ${numero} tiene ${cont} digitos`;
}
console.log(numeroDeDigitos(miNum));
