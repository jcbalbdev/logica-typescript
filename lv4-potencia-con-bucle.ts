/* Calcula base^exponente sin usar Math.pow(), solo con bucles. */

let numX: number = -2;
let exponente: number = -2;

function potencia(numero: number,exponente: number): number{
  let operacion: number = 1;
  for(let i: number =0;i<exponente;i++){
    operacion*= numero;
  }
  return operacion;
}

function potenciaGeneral(numero: number,exponente: number): string{
  let respuesta: number;
  if(exponente<0){
    respuesta = 1/potencia(numero,-exponente);
  }else if(exponente>0){
    respuesta = potencia(numero,exponente);
  }else{
    respuesta = 0;
  }
  return `${numero} elevado a ${exponente} es ${respuesta}`;
}

console.log(potenciaGeneral(numX,exponente));