"use strict";
/* Dado un carácter, evalúa si es una letra, número o símbolo. */
let caracter = "G";
function evaluandoCaracter(caracter) {
    let numero = Number(caracter);
    let codigoAscii = caracter.charCodeAt(0);
    if (!isNaN(numero)) {
        return `el caracter ${caracter} es un numero`;
    }
    else if ((codigoAscii >= 65 && codigoAscii <= 90) || (codigoAscii >= 97 && codigoAscii <= 122)) {
        return `el caracter ${caracter} es una letra`;
    }
    else {
        return `el caracter ${caracter} es un simbolo`;
    }
}
console.log(evaluandoCaracter(caracter));
