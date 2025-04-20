/* Dadas dos fechas como strings (tipo "2025-04-01"), muestra cuál es anterior. Usa Date y condiciones */

let fechaUno: Date = new Date("2025-04-03");
let fechaDos: Date = new Date("2025-04-04");


function validarFechas(fechaUno: Date,fechaDos: Date): string{
  return ((fechaDos.getTime() - fechaUno.getTime())>0)?`ayer fue ${fechaUno.toLocaleDateString()}`:`ayer fue ${fechaDos.toLocaleDateString()}`;
}

console.log(validarFechas(fechaUno,fechaDos));