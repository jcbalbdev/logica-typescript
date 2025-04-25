"use strict";
/* Declara un array de números y muestra el primero, último y la longitud del array. */
var Cumpleaño;
(function (Cumpleaño) {
    Cumpleaño[Cumpleaño["Bruce"] = 1] = "Bruce";
    Cumpleaño[Cumpleaño["Diana"] = 2] = "Diana";
    Cumpleaño[Cumpleaño["Clark"] = 12] = "Clark";
    Cumpleaño[Cumpleaño["Barry"] = 23] = "Barry";
})(Cumpleaño || (Cumpleaño = {}));
let cumpleañosMarzo = [Cumpleaño.Bruce, Cumpleaño.Diana, Cumpleaño.Clark, Cumpleaño.Barry];
console.log(`la cantidad de personas que cumples años en marzo son ${cumpleañosMarzo.length} , el primero cumple el ${cumpleañosMarzo[0]} de marzo y el ultimo el ${cumpleañosMarzo[3]}`);
