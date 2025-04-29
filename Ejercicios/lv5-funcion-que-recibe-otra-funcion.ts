/* Escribe una función ejecutar que reciba otra función como parámetro y la ejecute. */

function suma(a: number,b: number){
  return a + b;
}

function resta(a: number,b: number){
  return a - b;
}

function ejecutar(a: number,b: number,operacion : (x: number,y: number) => number): number{
  return operacion(a,b);
}

console.log(ejecutar(2,3,resta));