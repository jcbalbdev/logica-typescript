/* Usa variables para calcular el área y perímetro de un rectángulo dados base y altura. */

let ladoA: number = 2;
let ladoB: number = 3;

function area(a: number,b: number): number{
  return a*b;
}

function perimetro(a: number,b: number){
  return 2*(a+b);
}

console.log(`los lados del rectangulo son ${ladoA} y ${ladoB}. su area es ${area(ladoA,ladoB)} y su perimetro es ${perimetro(ladoA,ladoB)}`);


