/* Escribe una función pura que devuelva el doble de un número, y otra que también lo imprima (efecto colateral). */

function doble(a: number): number{
  return a*a;
}

function imprimiendoDoble(a: number): string{
  return `el doble de ${a}  es ${doble(a)}`;
}

console.log(imprimiendoDoble(3));
