"use strict";
/* Genera números aleatorios del 1 al 10 y súmalos hasta superar 100. Usa while. */
let aleatorio;
let sumaAleatorio = 0;
while (sumaAleatorio < 100) {
    aleatorio = Math.floor(Math.random() * 100 + 1);
    console.log(aleatorio);
    sumaAleatorio += aleatorio;
}
