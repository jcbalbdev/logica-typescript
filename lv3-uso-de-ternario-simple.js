"use strict";
/* Declara una variable esPremium: boolean y usa el operador ternario para mostrar un mensaje diferente según su valor. */
let esPremium = false;
function mensaje(valor) {
    let respuesta = valor ? "es true" : "es false";
    return respuesta;
}
console.log(mensaje(esPremium));
