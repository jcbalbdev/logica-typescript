/* Crea una mini calculadora que reciba dos números y una operación (+, -, *, /) y devuelva el resultado. */

enum Operaciones {
  Suma = "+",
  Resta = "-",
  Producto = "*",
  Division = "/"
}

const operación: Operaciones[] = [Operaciones.Suma,Operaciones.Resta,Operaciones.Producto,Operaciones.Division]; 

let numPrim: number = 12;
let numSeg: number =4;


function calculadora(a: number,b: number,op: string): string{
  switch (op) {
    case operacion[0]:
      return `la suma de ${a} y ${b} es ${a+b}`;
      break;
  
    default:
      return `la suma de ${a} y ${b} es ${a-b}`;
      break;
  }
}
console.log(calculadora(numPrim,numSeg,"+"));
