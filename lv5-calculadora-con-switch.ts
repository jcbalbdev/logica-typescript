/* Crea una mini calculadora que reciba dos números y una operación (+, -, *, /) y devuelva el resultado. */

enum Operacione {
  Suma = "+",
  Resta = "-",
  Producto = "*",
  Division = "/"
}

let numPrim: number = 12;
let numSeg: number =4;


function calculadora(a: number,b: number,op: string): string{
  switch (op) {
    case Operacione.Suma:
      return `la suma de ${a} y ${b} es ${a+b}`;
      break;
  
    default:
      return `la suma de ${a} y ${b} es ${a-b}`;
      break;
  }
}
console.log(calculadora(numPrim,numSeg,"+"));
