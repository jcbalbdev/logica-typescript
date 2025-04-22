/* Simula una entrada de usuario que se repite hasta que ingrese una contraseña correcta. */

let entrada: number = 2;

do {
  console.log(entrada);
  entrada+=2;
} while (entrada<7);