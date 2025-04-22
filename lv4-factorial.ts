/* Calcula el factorial de un número n. */

let numPrueba: number = 1;

function factorial(num: number): string{
  let comodin: number=1;
  if(num===0 || num===1){
    return `el factorial de ${num} es 1`;
  }else{
    for(let i: number=0;i<num;i++){
      comodin=comodin*(i+1);
    }
    return `el factorial de ${num} es ${comodin}`;
  }
}

console.log(factorial(numPrueba));
