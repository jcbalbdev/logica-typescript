"use strict";
/* Declara tres variables: nombre, apellido y edad. Usa template literals para formar un mensaje como:
"Hola, soy Juan Pérez y tengo 25 años." */
const nombre = "Jose";
const apellido = "Balbin";
let edad = 32;
function misDatos(nombre, apellido, edad) {
    let saludo = `mi nombre es ${nombre} ${apellido} y tengo ${edad}`;
    return saludo;
}
console.log(misDatos(nombre, apellido, edad));
