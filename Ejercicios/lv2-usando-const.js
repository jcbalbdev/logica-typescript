"use strict";
/* Declara una constante para el valor de PI y úsala para calcular el área de un círculo con radio 4. */
const PI = 3.141592;
let radio = 4;
function areaDeCirculo(radio, pi) {
    let area = pi * Math.pow(radio, 2);
    return `el area del circulo de radio ${radio} es : ${area}`;
}
console.log(areaDeCirculo(radio, PI));
