/* Declara dos variables numéricas y una variable string que represente una operación ("+", "-", "*", "/"). Usa if o switch para realizar la operación correspondiente. */

let primerNumero: number = 4;
let segundoNumero: number = 2;

let operacion: string = '*';

function calculadoraBasica(a: number,b: number,op: string): string{
  if(op === '+'){
    return `la suma de ${a} y ${b} es : ${a+b}`;
  }else if(op === '-'){
    return `la resta de ${a} y ${b} es : ${a-b}`;
  }else if(op === '*'){
    return `la multiplicacion de ${a} y ${b} es : ${a*b}`;
  }else{
    return `la division de ${a} y ${b} es : ${a/b}`;
  }
}

console.log(calculadoraBasica(primerNumero,segundoNumero,operacion));
