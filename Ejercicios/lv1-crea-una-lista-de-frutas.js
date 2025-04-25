"use strict";
/* Crea un array con frutas y muéstralo con console.log. */
var Fruta;
(function (Fruta) {
    Fruta["Manzana"] = "manzana";
    Fruta["Platano"] = "platano";
    Fruta["Mandarina"] = "mandarina";
    Fruta["Pera"] = "pera";
})(Fruta || (Fruta = {}));
let frutas = [Fruta.Manzana, Fruta.Platano, Fruta.Pera, Fruta.Mandarina];
console.log(`las frutas que necesitamos hoy son ${frutas[0]} ,${frutas[1]} ,${frutas[2]} y ${frutas[3]}`);
