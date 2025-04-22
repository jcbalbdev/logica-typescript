"use strict";
/* Dado un número, cuenta cuántos dígitos tiene (sin convertirlo a string). */
let miNum = 1234;
function numeroDeDigitos(numero) {
    let cont = 0;
    let residuo;
    let cociente;
    for (let i = 0; numero >= 10; i++) {
        residuo = numero % 10;
        cociente = Math.floor(numero / 10);
        cont++;
        numero = cociente;
    }
    return `el numero tiene ${cont} digitos`;
}
console.log(numeroDeDigitos(1234));
/*
n = 1234
10
r=4
q=123
c=1

n=q
r=3
q=12

n=q
r=2
q=1

n=1(n<10)



*/ 
