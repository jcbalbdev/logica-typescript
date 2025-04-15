"use strict";
/* Declara múltiples variables sueltas y luego reorganízalas en un solo objeto para representar una entidad (ej. libro, coche, etc.) */
let titulo = "las travesuras de la niña mala";
let costo = 21;
let edicion = "N° 1";
let libro = {
    titulo,
    costo,
    edicion
};
console.log(`el titulo del libro es ${libro.titulo}`);
