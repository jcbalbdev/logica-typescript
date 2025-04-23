/* Realiza una multiplicación de dos números sin usar *, solo sumas repetidas. */

let nume: number = -10;
let otroNume: number = -5;

function multiplicacionPositivo(a: number,b :number): number{
  let operacion: number = 0;

  let mayor: number = Math.max(a,b);
  let menor: number = Math.min(a,b);

  for (let i: number = 0; i < menor; i++) {
    operacion+=mayor
    
  }
  return operacion;
}


function multiplicacion(a: number,b :number): string{
  let respuesta: number ;
  if((a>0) && (b>0)){
    respuesta = multiplicacionPositivo(a,b);
  }else if((a<0) && (b<0)){
    respuesta = multiplicacionPositivo(-a,-b);
  }else if((a<0) && (b>0)){
    a=-a;
    respuesta = -multiplicacionPositivo(a,b);
    a=-a;
  }else if((a>0) && (b<0)){
    b=-b;
    respuesta = -multiplicacionPositivo(a,b);
    b=-b;
  }else{
    respuesta = 0;
  }

  return `el producto de ${a} y ${b} es ${respuesta}`;
}

console.log(multiplicacion(nume,otroNume));





