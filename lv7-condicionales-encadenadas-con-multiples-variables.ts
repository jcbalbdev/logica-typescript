/* Si una persona tiene más de 18 años, un carnet válido y no tiene multas, puede conducir. Evalúa con if. */

interface Conductor{
  edadPersona:number;
  carnetValido:boolean;
  tieneMultas:boolean;
}

function permisoDeConducir({edadPersona,carnetValido,tieneMultas}: Conductor): string{
  if(edadPersona <= 18){
    return `no puede conducir es menor de edad`;
  }
  if(!carnetValido){
    return `no puede conducir su carnet no es valido`;
  }
  if(tieneMultas){
    return `no puede conducir tiene multas`;
  }
  return `si puede conducir cumple con todo`;
}

let batman: Conductor = {
  edadPersona:21,
  carnetValido:true,
  tieneMultas:false
}


console.log(permisoDeConducir(batman));