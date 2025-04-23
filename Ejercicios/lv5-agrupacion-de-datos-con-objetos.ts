/* Declara múltiples variables sueltas y luego reorganízalas en un solo objeto para representar una entidad (ej. libro, coche, etc.) */

let titulo: string = "las travesuras de la niña mala";
let costo: number = 21;
let edicion: string = "N° 1";

let libro: {titulo: string,costo: number,edicion: string} = {
  titulo,
  costo,
  edicion 
}

console.log(`el titulo del libro es ${libro.titulo}`);

