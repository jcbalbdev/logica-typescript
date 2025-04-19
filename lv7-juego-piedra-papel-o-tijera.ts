/* Simula un juego entre jugador y CPU (puedes usar Math.random() para CPU). Evalúa el ganador con condiciones. */
/* piedra = 1 , tijera = 2 , papel = 3*/
let pedroPascal: number = 1;
let cpu: number = Math.floor(Math.random()*3) + 1;

function janken(playerUno: number,playerDos: number): string{
  return `${playerUno} y ${playerDos}`
} 

console.log(janken(cpu,pedroPascal));