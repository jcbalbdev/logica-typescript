/* Declara una variable tipo string con valor "123", conviértela a número y realiza una operación matemática. */

let notaMatematica: string = '12';
let notaQuimica: string = '13';

function promedio(notaUno: string,notaDos: string): number{
  let primeraNota: number = Number(notaUno);
  let segundaNota: number = Number(notaDos);

  return (primeraNota + segundaNota)/2;
}

console.log('el promedio de las notas es :' + promedio(notaMatematica,notaQuimica));