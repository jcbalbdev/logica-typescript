"use strict";
/* Simula una entrada del usuario para ingresar un número. Valida si es realmente un número y muestra un error si no lo es. */
let codigo = "34";
function evaluandoCodigo(codigo) {
    let tipo = typeof (codigo);
    switch (tipo) {
        case "number":
            return `Codigo correcto`;
        case "string":
            return `ERROR ingresa un numero`;
        default:
            return `tipo invalido`;
    }
}
console.log(evaluandoCodigo(codigo));
