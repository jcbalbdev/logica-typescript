"use strict";
/* Evalúa la edad de una persona y clasifica como niño, joven, adulto o anciano usando ternarios anidados. */
let suEdad = 23;
function evaluaEdad(edad) {
    let respuesta = edad > 60 ? "es anciano" : ((edad >= 18) && (edad <= 60)) ? "es adulto" : ((edad >= 13) && (edad < 18)) ? "es joven" : edad < 13 ? "es niño" : "la edad no entra en ningun rango";
    return respuesta;
}
console.log(evaluaEdad(suEdad));
