/* Calcula base^exponente sin usar Math.pow(), solo con bucles. */

let numX: number = -3;
let exponente: number = 3;

function potencia(numero: number,exponente: number): string{
  let operacion: number = 1;
  for(let i: number =0;i<exponente;i++){
    operacion*= numero;
  }
  return `${numero} elevado a ${exponente} es ${operacion}`;
}

console.log(potencia(numX,exponente));