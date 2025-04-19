/* Simula un juegode janken(piedra,papel o tijera) entre jugador y CPU (puedes usar Math.random() para CPU). Evalúa el ganador con condiciones. */
/* piedra = 1 , tijera = 2 , papel = 3*/

enum Opcion{
  Piedra = 0,
  Papel = 1,
  Tijera = 2
}

let nombres : Record<Opcion,string> = {
  [Opcion.Piedra] : "piedra",
  [Opcion.Papel] : "papel",
  [Opcion.Tijera] : "tijera"
}

function janken(player: Opcion,cpu: Opcion): string{
  let OpcionPlayer: string = nombres[player];
  let OpcionCpu: string = nombres[cpu] ;
  if(player === cpu){
    return `Ambos eligieron ${OpcionPlayer}. Resultado: ¡EMPATE!`;
  }

  let ganoPlayer = (player === Opcion.Piedra && cpu === Opcion.Tijera) ||
  (player === Opcion.Tijera && cpu === Opcion.Papel) ||
  (player === Opcion.Papel && cpu === Opcion.Piedra);

  let ganador = ganoPlayer?"Jugador 1" : "CPU";
  let eleccionDelGanador = ganoPlayer ? OpcionPlayer : OpcionCpu;

  return `Jugador 1 eligió ${OpcionPlayer} y CPU eligió ${OpcionCpu}. GANADOR: ${ganador} con ${eleccionDelGanador}`;

}

let player: Opcion = Opcion.Piedra;
let cpu: Opcion = Math.floor(Math.random()*3) + 1;

console.log(janken(player,cpu));


