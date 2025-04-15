/* Evalúa una variable numérica y muestra si es positiva, negativa o igual a cero. */

let veintiuno: number = 21;
let numeroCero: number = 0;
let negativo: number = -21;

function queEs(valor: number): string{
  if (valor > 0) {
    return `el numero ${valor} es positivo`;
  } else if(valor < 0) {
    return `el numero ${valor} es negativo`;
  }else{
    return `el numero ${valor} es neutro`;
  }
}

