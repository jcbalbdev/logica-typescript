/* Escribe una función pura que devuelva el doble de un número, y otra que también lo imprima (efecto colateral). */

function doble(a: number): number{
  return 2*a;
}

function imprimiendoDoble(a: number): void{
  console.log(`el doble de ${a}  es ${doble(a)}`) ;
}

console.log(imprimiendoDoble(3));
