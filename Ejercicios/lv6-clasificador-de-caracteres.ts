/* Dado un carácter, evalúa si es una letra, número o símbolo. */

let caracter: string =  "G";

function evaluandoCaracter(caracter: string): string{
  let numero: number = Number(caracter);
  let codigoAscii: number = caracter.charCodeAt(0);

  if(!isNaN(numero)){
    return `el caracter ${caracter} es un numero`;
  }else if((codigoAscii >= 65 && codigoAscii <= 90) || (codigoAscii >= 97 && codigoAscii <= 122)){
    return `el caracter ${caracter} es una letra`;
  }else{
    return `el caracter ${caracter} es un simbolo`;
  }
}

console.log(evaluandoCaracter(caracter));
