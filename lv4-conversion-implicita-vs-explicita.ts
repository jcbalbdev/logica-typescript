/* Declara una variable string "5" y súmala con 5, analiza el resultado. Luego conviértela correctamente y vuelve a sumar. */

let numString: string = '5';

let sumaImplicita = numString + 5;
let sumaExplicita = Number(numString) + 5;

console.log(`la suma implicita es ${sumaImplicita} y la suma explicita es ${sumaExplicita}`);
