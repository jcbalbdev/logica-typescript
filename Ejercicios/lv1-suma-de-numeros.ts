/* declara dos variables y muestra su suma*/

let firstNumber: number = 12;
let secondNumber: number = 13;

function sumaDe(a: number,b: number): string{
  return `la suma de ${a} y ${b} es : ${a+b} `;
}

console.log(sumaDe(firstNumber,secondNumber))