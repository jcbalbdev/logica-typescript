/* Evalúa la edad de una persona y clasifica como niño, joven, adulto o anciano usando ternarios anidados. */

let suEdad: number = 21;

function evaluaEdad(edad: number): string{
  let respuesta: string = edad > 60? "es anciano": edad >=18 ? "es adulto": edad >=13?"es joven":edad >=0 ? "es niño": "la edad no valida";

  return respuesta;
}

console.log(evaluaEdad(suEdad));
