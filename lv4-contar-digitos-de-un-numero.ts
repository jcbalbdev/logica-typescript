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

/* 
n = 1234
10
r=4
q=123
c=1

n=q
r=3
q=12

n=q
r=2
q=1

n=1(n<10)



*/