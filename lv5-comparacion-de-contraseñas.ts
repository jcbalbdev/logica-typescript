/* Simula la validación de una contraseña ingresada dos veces. Muestra si coinciden o no y si cumple longitud mínima. */

let primerIngreso: string = "dominatrix12345";
let segundoIngreso: string = "dominatrix12345"; 

function validacionPass(primerIngreso: string,segundoIngreso: string,min: number): string{
  let longitudPass: number = primerIngreso.length;
  if(primerIngreso === segundoIngreso){
    if(longitudPass >= 8){
      return `la contraseña es valida`;
    }else{
      return `la contraseña no es valida, numero insuficiente de caracteres`;
    }
  }else{
    return `las contraseñas no coinciden`;
  }
}
