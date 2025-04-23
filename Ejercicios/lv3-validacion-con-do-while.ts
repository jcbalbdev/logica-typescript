/* Simula una entrada de usuario que se repite hasta que ingrese una contraseña correcta. */

let contraseña: string = "";
let passCorrecta: string = "pass"

do {
  console.log("Verificando contraseña:", contraseña);
  contraseña = "pass";
  
} while (contraseña!==passCorrecta);

console.log("Contraseña correcta. Acceso permitido.");