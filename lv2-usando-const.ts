/* Declara una constante para el valor de PI y úsala para calcular el área de un círculo con radio 4. */

const PI: number = 3.141592;
let radio: number = 4;

function areaCirculo(radio: number,pi: number): string{
  let area: number = pi*Math.pow(radio,2);

  return `el area del circulo de radio ${radio} es : ${area}`;
}

console.log(areaCirculo(radio,PI));
