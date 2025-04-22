/* Dado un número, determina si es primo (tiene solo dos divisores: 1 y él mismo). */
let esPrimo: number  = 37;

function numeroPrimo(numero: number): string{
  let contador: number = 0;
  for(let i=1;i<=Math.sqrt(numero);i++){
    if(numero%i===0){
      contador++;
    }
  }

  if(contador>2){
    return `${numero} no es primo`
  }

  return `${numero} es primo`
}

console.log(numeroPrimo(esPrimo));
