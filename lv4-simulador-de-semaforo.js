"use strict";
/* Según el color (rojo, amarillo, verde), muestra qué hacer: "Detente", "Precaución", "Avanza". */
var Color;
(function (Color) {
    Color["Rojo"] = "Detente";
    Color["Amarillo"] = "Precauci\u00F3n";
    Color["Verde"] = "Avanza";
})(Color || (Color = {}));
function semaforoEn(color) {
    if (color === Color.Rojo) {
        return `el semaforo esta en rojo asi que ${Color.Rojo}`;
    }
    else if (color === Color.Amarillo) {
        return `el semaforo esta en amarillo asi que ${Color.Amarillo}`;
    }
    else if (color === Color.Verde) {
        return `el semaforo esta en verde asi que ten ${Color.Verde}`;
    }
    else {
        return `el semaforo esta apagado`;
    }
}
console.log(semaforoEn(Color.Amarillo));
