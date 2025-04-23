/* Dadas dos fechas como strings (tipo "2025-04-01"), muestra cuál es anterior. Usa Date y condiciones */

let fechaUno: Date = new Date("1993-06-22T12:00:00");
let fechaDos: Date = new Date("2025-04-04T12:00:00");

function revisionFecha(fechaUno: Date,fechaDos: Date): string{
  return (fechaDos>fechaUno)?`la fecha anterior es ${fechaUno.toLocaleDateString("es-PE")}`:`la fecha anterior es ${fechaDos.toLocaleDateString("es-PE")}`;
} 

console.log(revisionFecha(fechaUno,fechaDos));