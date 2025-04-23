"use strict";
/* Según el color (rojo, amarillo, verde), muestra qué hacer: "Detente", "Precaución", "Avanza". */
var Color;
(function (Color) {
    Color["Rojo"] = "rojo";
    Color["Verde"] = "verde";
    Color["Amarillo"] = "amarillo";
})(Color || (Color = {}));
function semaforoEn(color) {
    switch (color) {
        case Color.Rojo:
            return `El semáforo está en ${color}, así que Detente`;
        case Color.Amarillo:
            return `El semáforo está en ${color}, así que Precaución`;
        case Color.Verde:
            return `El semáforo está en ${color}, así que Avanza`;
        default:
            return "El semáforo está apagado";
    }
}
console.log(semaforoEn(Color.Verde));
