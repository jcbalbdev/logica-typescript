"use strict";
/* Dadas dos fechas como strings (tipo "2025-04-01"), muestra cuál es anterior. Usa Date y condiciones */
let fechaUno = new Date("2025-04-03");
let fechaDos = new Date("2025-04-04");
function validarFechas(fechaUno, fechaDos) {
    return ((fechaDos.getTime() - fechaUno.getTime()) > 0) ? `ayer fue ${fechaUno.toLocaleDateString()}` : `ayer fue ${fechaDos.toLocaleDateString()}`;
}
console.log(validarFechas(fechaUno, fechaDos));
