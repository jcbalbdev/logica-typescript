/* Dado un número del 1 al 7, muestra el día de la semana correspondiente. */

let diaSemana: number = 4;

function dia(codigo: number): string{
  if (codigo === 1) {
    return `el codigo ${codigo} le pertenece al Lunes`;
  } else if(codigo === 2) {
    return `el codigo ${codigo} le pertenece al Martes`;
  } else if(codigo === 3) {
    return `el codigo ${codigo} le pertenece al Miercoles`;
  } else if(codigo === 4) {
    return `el codigo ${codigo} le pertenece al Jueves`;
  } else if(codigo === 5) {
    return `el codigo ${codigo} le pertenece al Viernes`;
  } else if(codigo === 6) {
    return `el codigo ${codigo} le pertenece al Sabado`;
  } else if(codigo === 7) {
    return `el codigo ${codigo} le pertenece al Domingo`;
  }else{
    return `el codigo ${codigo} no pertenece a ningun dia`;
  }
}
