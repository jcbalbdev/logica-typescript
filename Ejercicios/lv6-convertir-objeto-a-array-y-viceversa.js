"use strict";
/* Convierte un objeto a array y viceversa . Usa Object.entries, Object.fromEntries, Object.keys y Object.values. */
let pikachu = {
    nombre: "pikachu",
    tipo: "electrico"
};
let usandoObjectkeys = Object.keys(pikachu);
console.log(usandoObjectkeys);
let usandoObjectvalues = Object.values(pikachu);
