"use strict";
/* Declara una variable tipo string con valor "123", conviértela a número y realiza una operación matemática. */
let notaMatematica = '12';
let notaQuimica = '13';
function promedio(notaUno, notaDos) {
    let primeraNota = Number(notaUno);
    let segundaNota = Number(notaDos);
    return (primeraNota + segundaNota) / 2;
}
console.log('el promedio de las notas es :' + promedio(notaMatematica, notaQuimica));
