"use strict";
/* Simula la validación de una contraseña ingresada dos veces. Muestra si coinciden o no y si cumple longitud mínima. */
let primerIngreso = "dominatrix12345";
let segundoIngreso = "dominatrix12345";
function validacionPass(primerIngreso, segundoIngreso, min) {
    let longitudPass = primerIngreso.length;
    if (primerIngreso === segundoIngreso) {
        if (longitudPass >= 8) {
            return `la contraseña es valida`;
        }
        else {
            return `la contraseña no es valida, numero insuficiente de caracteres`;
        }
    }
    else {
        return `las contraseñas no coinciden`;
    }
}
