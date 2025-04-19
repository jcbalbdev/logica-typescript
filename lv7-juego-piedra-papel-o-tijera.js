"use strict";
/* Simula un juegode janken(piedra,papel o tijera) entre jugador y CPU (puedes usar Math.random() para CPU). Evalúa el ganador con condiciones. */
/* piedra = 1 , tijera = 2 , papel = 3*/
var Opciones;
(function (Opciones) {
    Opciones[Opciones["Piedra"] = 1] = "Piedra";
    Opciones[Opciones["Papel"] = 2] = "Papel";
    Opciones[Opciones["Tijera"] = 3] = "Tijera";
})(Opciones || (Opciones = {}));
