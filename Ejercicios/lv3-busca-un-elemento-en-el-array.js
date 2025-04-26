"use strict";
/* Usa includes y indexOf para saber si una heroe está en la lista. */
let heroes = ["Batman", "Superman", "Flash"];
function estaEnLaLista(lista, heroe) {
    if (lista.includes(heroe)) {
        return `el ${heroe} si esta en la lista`;
    }
    else {
        return `el ${heroe} no esta en la lista`;
    }
}
console.log(estaEnLaLista(heroes, "Batman"));
