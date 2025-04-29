/* Crea funciones areaRectangulo, areaTriangulo, areaCirculo. Usa cada una con diferentes valores. */

function producto(a: number,b: number): number{
  return a*b;
}

function areaRectangulo(a: number,b: number): number{
  return producto(a,b);
}

function areaTriangulo(a: number,b: number){
  return producto(a,b)/2;
}

function areaCirculo(a: number,b: number){
  return producto(a,b);
}

console.log(`el area de un rectangulo de lados 4 y 5 es : ${areaRectangulo(4,5)}`);
console.log(`el area de un triangulo de altura y base 2 y 5 es : ${areaRectangulo(2,5)}`);
console.log(`el area de un cuadrado de lados 6 y 5 es : ${areaRectangulo(6,5)}`);