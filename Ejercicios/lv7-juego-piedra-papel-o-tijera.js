"use strict";
/* Simula un juegode janken(piedra,papel o tijera) entre jugador y CPU (puedes usar Math.random() para CPU). Evalúa el ganador con condiciones. */
/* piedra = 1 , tijera = 2 , papel = 3*/
var Opcion;
(function (Opcion) {
    Opcion[Opcion["Piedra"] = 0] = "Piedra";
    Opcion[Opcion["Papel"] = 1] = "Papel";
    Opcion[Opcion["Tijera"] = 2] = "Tijera";
})(Opcion || (Opcion = {}));
let nombres = {
    [Opcion.Piedra]: "piedra",
    [Opcion.Papel]: "papel",
    [Opcion.Tijera]: "tijera"
};
function janken(player, cpu) {
    let OpcionPlayer = nombres[player];
    let OpcionCpu = nombres[cpu];
    if (player === cpu) {
        return `Ambos eligieron ${OpcionPlayer}. Resultado: ¡EMPATE!`;
    }
    let ganoPlayer = (player === Opcion.Piedra && cpu === Opcion.Tijera) ||
        (player === Opcion.Tijera && cpu === Opcion.Papel) ||
        (player === Opcion.Papel && cpu === Opcion.Piedra);
    let ganador = ganoPlayer ? "Jugador 1" : "CPU";
    let eleccionDelGanador = ganoPlayer ? OpcionPlayer : OpcionCpu;
    return `Jugador 1 eligió ${OpcionPlayer} y CPU eligió ${OpcionCpu}. GANADOR: ${ganador} con ${eleccionDelGanador}`;
}
let player = Opcion.Piedra;
let cpu = Math.floor(Math.random() * 3) + 1;
console.log(janken(player, cpu));
