"use strict";
/* Simula un juegode janken(piedra,papel o tijera) entre jugador y CPU (puedes usar Math.random() para CPU). Evalúa el ganador con condiciones. */
/* piedra = 1 , tijera = 2 , papel = 3*/
var Opciones;
(function (Opciones) {
    Opciones[Opciones["Piedra"] = 0] = "Piedra";
    Opciones[Opciones["Papel"] = 1] = "Papel";
    Opciones[Opciones["Tijera"] = 2] = "Tijera";
})(Opciones || (Opciones = {}));
let nombres = {
    [Opciones.Piedra]: "piedra",
    [Opciones.Papel]: "papel",
    [Opciones.Tijera]: "tijera"
};
