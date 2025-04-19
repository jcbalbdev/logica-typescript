"use strict";
/* Simula un juego entre jugador y CPU (puedes usar Math.random() para CPU). Evalúa el ganador con condiciones. */
/* piedra = 1 , tijera = 2 , papel = 3*/
let pedroPascal = 1;
let cpu = Math.floor(Math.random() * 3) + 1;
function janken(playerUno, playerDos) {
    return `${playerUno} y ${playerDos}`;
}
console.log(janken(cpu, pedroPascal));
