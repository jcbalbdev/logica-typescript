/* Crea una mini calculadora que reciba dos números y una operación (+, -, *, /) y devuelva el resultado. */

enum Operacion {
  Suma = "+",
  Resta = "-",
  Producto = "*",
  Division = "/"
}

let numPrim: number = 12;
let numSeg: number =4;


function calculadora(a: number,b: number,op: string): string{
  switch (op) {
    case Operacion.Suma:
      return `la suma de ${a} y ${b} es ${a+b}`;
      break;
    case Operacion.Resta:
      return `la resta de ${a} y ${b} es ${a-b}`;
      break;
    case Operacion.Producto:
      return `el producto de ${a} y ${b} es ${a*b}`;
      break; 
    case Operacion.Division:
      return `la division de ${a} y ${b} es ${a/b}`;
      break;  
    default:
      return `Operacion no valida`;
      break;
  }
}
console.log(calculadora(numPrim,numSeg,"/"));
