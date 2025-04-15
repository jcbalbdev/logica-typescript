/* Usa tres variables booleanas y crea condiciones usando &&, ||, ! para simular una lógica de acceso a un sistema. */

let primerPaso: boolean = true;
let segundoPaso: boolean = false;
let tercerPaso: boolean = false;

function comprobacion(a: boolean,b: boolean,c: boolean): string{
  if (a && b && !c) {
    return "acceso concedido";
  } else{
    return "acceso denegado";
  }
}

console.log(comprobacion(primerPaso,segundoPaso,tercerPaso));
