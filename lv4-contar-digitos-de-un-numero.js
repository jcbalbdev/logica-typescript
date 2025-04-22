"use strict";
/* Dado un número, cuenta cuántos dígitos tiene (sin convertirlo a string). */
let miNum = 3141592;
function numeroDeDigitos(numero) {
    let cont = 1;
    let residuo;
    let cociente;
    let newNum = numero;
    for (let i = 0; newNum >= 10; i++) {
        residuo = newNum % 10;
        cociente = Math.floor(newNum / 10);
        cont++;
        newNum = cociente;
    }
    return `el numero ${numero} tiene ${cont} digitos`;
}
console.log(numeroDeDigitos(miNum));
