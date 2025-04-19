/* Simula un juego entre jugador y CPU (puedes usar Math.random() para CPU). Evalúa el ganador con condiciones. */
/* piedra = 1 , tijera = 2 , papel = 3*/
let pedroPascal: number = 1;
let cpu: number = Math.floor(Math.random()*3) + 1;

function janken(playerUno: number,playerDos: number): string{
  if(playerUno === 1){
    if(playerDos === 2){
      return `el jugador ${playerUno} escogio piedra y el jugador ${playerDos} escogio tijera. GANADOR: ${playerUno}`
    }else if(playerDos === 3){
      return `el jugador ${playerUno} escogio piedra y el jugador ${playerDos} escogio papel. GANADOR: ${playerDos}`
    }else{
      return `el jugador ${playerUno} escogio piedra y el jugador ${playerDos} escogio piedra. GANADOR: EMPATE!!`
    }
  }else if(playerUno === 2){
    if(playerDos === 2){
      return `el jugador ${playerUno} escogio tijera y el jugador ${playerDos} escogio tijera. GANADOR: EMPATE!!`
    }else if(playerDos === 3){
      return `el jugador ${playerUno} escogio tijera y el jugador ${playerDos} escogio papel. GANADOR: ${playerUno}`
    }else{
      return `el jugador ${playerUno} escogio tijera y el jugador ${playerDos} escogio papel. GANADOR: ${playerDos}`
    }
  }else if(playerUno === 3){
    if(playerDos === 2){
      return `el jugador ${playerUno} escogio papel y el jugador ${playerDos} escogio tijera. GANADOR: ${playerDos}`
    }else if(playerDos === 3){
      return `el jugador ${playerUno} escogio papel y el jugador ${playerDos} escogio papel. GANADOR: EMPATE!!`
    }else{
      return `el jugador ${playerUno} escogio papel y el jugador ${playerDos} escogio papel. GANADOR: ${playerUno}`
    }
  }else{
    return `no se escogio una opcion optima`;
  }
} 

console.log(janken(cpu,pedroPascal));