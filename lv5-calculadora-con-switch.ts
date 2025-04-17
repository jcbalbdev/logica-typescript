/* Crea una mini calculadora que reciba dos números y una operación (+, -, *, /) y devuelva el resultado. */

enum Operacion{
  Suma = "+",
  Resta = "-",
  Producto = "*",
  Division = "/"
}

let numPrim: number = 15;
let numSeg: number =3;

function calculadora(a: number,b: number,op: Operacion): string{
  switch (op) {
    case Operacion.Suma:
      return `la suma de ${a} y ${b} es ${a+b}`;

    case Operacion.Resta:
      return `la resta de ${a} y ${b} es ${a-b}`;

    case Operacion.Producto:
      return `el producto de ${a} y ${b} es ${a*b}`;

    case Operacion.Division:
      return b!== 0?`la division de ${a} y ${b} es ${a/b}`:`Error: división entre cero`;

    default:
      return `la Operacion no existe ene sta calculadora`;
  }
}

console.log(calculadora(numPrim,numSeg,Operacion.Producto));