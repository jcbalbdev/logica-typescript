/* Realiza una multiplicación de dos números sin usar *, solo sumas repetidas. */

let nume: number = 8;
let otroNume: number = 5;

function multiplicación(a: number,b :number): string{
  let operacion: number = 0;
  for (let i: number = 0; i < b; i++) {
    operacion+=a
    
  }
  return `la multiplicacion de ${a} y ${b} es : ${operacion}`;
}

console.log(multiplicación(nume,otroNume));
