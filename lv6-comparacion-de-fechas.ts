/* Dadas dos fechas como strings (tipo "2025-04-01"), muestra cuál es anterior. Usa Date y condiciones */

let fechaUno: Date = new Date("2025-04-03T12:00:00");
let fechaDos: Date = new Date("2025-04-04T12:00:00");


function validarFechas(fechaUno: Date,fechaDos: Date): string{
  return ((fechaDos.getTime() - fechaUno.getTime())>0)?`ayer fue ${fechaUno.toLocaleDateString("es-PE")}`:`ayer fue ${fechaDos.toLocaleDateString("es-PE")}`;
}

console.log(validarFechas(fechaUno,fechaDos));