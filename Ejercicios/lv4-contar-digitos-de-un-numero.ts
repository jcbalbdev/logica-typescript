/* Dado un número, cuenta cuántos dígitos tiene (sin convertirlo a string). */
let miNum: number = 31415920

function numeroDeDigitos(numero: number): string{
  let cont: number = 1;
  let newNum: number = numero;

  while(newNum>=10){
    newNum=Math.floor(newNum/10);
    cont++;
  }
  
  return `el numero ${numero} tiene ${cont} digitos`
}

console.log(numeroDeDigitos(miNum))

