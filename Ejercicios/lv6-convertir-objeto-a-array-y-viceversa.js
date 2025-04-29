"use strict";
/* Convierte un objeto a array y viceversa . Usa Object.entries, Object.fromEntries, Object.keys y Object.values. */
let pikachu = {
    nombre: "pikachu",
    tipo: "electrico"
};
let usandoObjectkeys = Object.keys(pikachu);
console.log(usandoObjectkeys);
let usandoObjectvalues = Object.values(pikachu);
console.log(usandoObjectvalues);
let DeObjetoaArray = Object.entries(pikachu);
console.log(DeObjetoaArray);
let DeArrayaObjeto = Object.fromEntries(DeObjetoaArray);
console.log(DeArrayaObjeto);
