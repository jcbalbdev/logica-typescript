"use strict";
/* Usa tres variables booleanas y crea condiciones usando &&, ||, ! para simular una lógica de acceso a un sistema. */
let primerPaso = true;
let segundoPaso = false;
let tercerPaso = false;
function comprobacion(a, b, c) {
    if (a && b && !c) {
        return "acceso concedido";
    }
    else {
        return "acceso denegado";
    }
}
console.log(comprobacion(primerPaso, segundoPaso, tercerPaso));
