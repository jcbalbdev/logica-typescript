/* Declara tres variables: nombre, apellido y edad. Usa template literals para formar un mensaje como:
"Hola, soy Juan Pérez y tengo 25 años." */

const nombre: string = "Jose";
const apellido: string = "Balbin";
let edad: number = 32;

function misDatos(nombre: string,apellido: string,edad: number): string{
  let saludo: string = `mi nombre es ${nombre} ${apellido} y tengo ${edad}`;
  
  return saludo;
}

console.log(misDatos(nombre,apellido,edad));
