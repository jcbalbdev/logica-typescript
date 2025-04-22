/* Dado un número, cuenta cuántos dígitos tiene (sin convertirlo a string). */
let miNum: number = 3141592

function numeroDeDigitos(numero: number): string{
  let cont: number = 1;
  let residuo: number;
  let cociente: number;
  let newNum: number = numero;

  for (let i = 0; newNum>=10 ; i++) {
    residuo = newNum%10;
    cociente = Math.floor(newNum/10);
    cont++
    newNum=cociente;
  }
  
  return `el numero ${numero} tiene ${cont} digitos`
}

console.log(numeroDeDigitos(miNum))

