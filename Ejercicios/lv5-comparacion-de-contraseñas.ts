/* Simula la validación de una contraseña ingresada dos veces. Muestra si coinciden o no y si cumple longitud mínima. */

let primerIngreso: string = "domina";
let segundoIngreso: string = "domina"; 

function validacionPass(primerIngreso: string,segundoIngreso: string,min: number): string{
  let longitudPass: number = primerIngreso.length;
  if(primerIngreso === segundoIngreso){
    if(longitudPass >= min){
      return `la contraseña es valida`;
    }else{
      return `la contraseña no es valida, numero insuficiente de caracteres`;
    }
  }else{
    return `las contraseñas no coinciden`;
  }
}

console.log(validacionPass(primerIngreso,segundoIngreso,8));