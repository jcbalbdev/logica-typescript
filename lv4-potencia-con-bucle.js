"use strict";
/* Calcula base^exponente sin usar Math.pow(), solo con bucles. */
let numX = -2;
let exponente = -2;
function potencia(numero, exponente) {
    let operacion = 1;
    for (let i = 0; i < exponente; i++) {
        operacion *= numero;
    }
    return operacion;
}
function potenciaGeneral(numero, exponente) {
    let respuesta;
    if (exponente < 0) {
        respuesta = 1 / potencia(numero, -exponente);
    }
    else if (exponente > 0) {
        respuesta = potencia(numero, exponente);
    }
    else {
        respuesta = 0;
    }
    return `${numero} elevado a ${exponente} es ${respuesta}`;
}
console.log(potenciaGeneral(numX, exponente));
