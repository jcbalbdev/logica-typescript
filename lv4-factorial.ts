/* Calcula el factorial de un número n. */

let numPrueba: number = 5;

function factorial(num: number): string{
  let comodin: number=1;
  for(let i: number=0;i<num;i++){
    comodin=comodin*(i+1);
  }
  return `el factorial de ${num} es ${comodin}`;
}

console.log(factorial(numPrueba));
/* 
4x3x2x1
n=1
n=nx(i+1)
*/