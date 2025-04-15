/* Declara una variable que simula un input de usuario como string y convierte a número validando que no sea NaN. */

let dniFormulario: number = 1122334455;
let nombreFormulario: string = "pepito juarez";

let convierte: number = Number(nombreFormulario);

function validando(valor: number): string{
  if (Number.isNaN(valor)) {
    return "no es un numero es un string";
  } else {
    return "es un numero no es un string";
  }
}

console.log(validando(convierte));
